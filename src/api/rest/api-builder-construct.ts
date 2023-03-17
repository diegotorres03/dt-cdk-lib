import {
    aws_apigateway as ApiGateway,
    aws_ec2 as EC2,
    aws_lambda as Lambda,
    RemovalPolicy,
    CfnOutput,
    Duration
} from 'aws-cdk-lib'
import { Construct } from 'constructs'
// import * as sqs from 'aws-cdk-lib/aws-sqs';


/**
 * @typedef {Object} LambdaDef
 * @property {string} path - path to code 
 * @property {handler} handler - file and method name, like index.handle 
 * @property {Object} env - environment variables 
 */

interface LambdaDef {
    runtime?: Lambda.Runtime
    path: string
    handler?: string
    env?: any
    name?: string
}

export class ApiBuilderConstruct extends Construct {

    #apiHandlers = new Map<string, Lambda.Function>()
    api: ApiGateway.RestApi
    // private codeBucket: S3.bucket

    constructor(scope: Construct, id: string) {
        super(scope, id)
        this.api = new ApiGateway.RestApi(this, id, {
            deployOptions: { stageName: process.env.STAGE || 'dev' },
            defaultCorsPreflightOptions: {
                allowOrigins: ApiGateway.Cors.ALL_ORIGINS,
                allowMethods: ApiGateway.Cors.ALL_METHODS,
                allowHeaders: [
                    'Content-type', 'X-Amz-Date', 'X-Api-Key', 'Authorization',
                    'Access-Controll-Allow-Headers', 'Access-Controll-Allow-Origins', 'Access-Controll-Allow-Methods',
                ],
                allowCredentials: true,
            },
        })


        new CfnOutput(this, 'apiUrl', { value: this.api.url })


    }

    requestHandler(method: string, path: string, lambdaCode: Function | string, options: any) {

        const lambda = this.createLambda(lambdaCode, options)

        if (Array.isArray(options.layers))
            options.layers.forEach((layer: Lambda.LayerVersion) => lambda.addLayers(layer))

        this.api.root.resourceForPath(path)
            // api.root.addResource(path)
            .addMethod(method,
                new ApiGateway.LambdaIntegration(lambda, { proxy: true }))

        this.#apiHandlers.set(path, lambda)
    }

    post(path: string, lambdaCode: Function | string, options: any) {
        this.requestHandler('POST', path, lambdaCode, options)
    }
    get(path: string, lambdaCode: Function | string, options: any) {
        this.requestHandler('GET', path, lambdaCode, options)
    }
    delete(path: string, lambdaCode: Function | string, options: any) {
        this.requestHandler('DELETE', path, lambdaCode, options)
    }
    patch(path: string, lambdaCode: Function | string, options: any) {
        this.requestHandler('PATCH', path, lambdaCode, options)
    }
    put(path: string, lambdaCode: Function | string, options: any) {
        this.requestHandler('PUT', path, lambdaCode, options)
    }




    /**
     * original location api-builder.ts
     * @author Diego Torres <diegotorres@easyarchery.net>
     * @version 1.0.0
     * @param {LambdaDef} LambdaDef 
     * @returns 
     */
    createLambda(functionCode: Function | string, options: {
        name: string,
        env: any,
        access: Function[],
        vpc: EC2.Vpc | string,
        securityGroupIds: string[],
        layers?: Lambda.ILayerVersion[]
    }) {
        if (!options.name) throw new Error('name is required')

        let vpc
        let sgs
        if (options.vpc) {
            vpc = options.vpc === 'default' ?
                EC2.Vpc.fromLookup(this, 'default-vpc-' + options.name, { isDefault: true }) :
                options.vpc as EC2.Vpc
            sgs = [EC2.SecurityGroup.fromLookupByName(this, 'defaultSG-' + options.name, 'default', vpc)]
            //  sgs = Array.isArray(options.securityGroupIds) ? options.securityGroupIds
            //     .map(sgId => EC2.SecurityGroup.fromSecurityGroupId(this, 'sgid', sgId)) : []
        }


        const functionCodeStr = typeof functionCode === 'function' ? functionCode.toString() : functionCode
        let code

        if (functionCodeStr.includes('exports.handler = ')) {
            code = `(${functionCodeStr})()`
        } else {
            code = `(function() {
                exports.handler = ${functionCodeStr}
            })()`
        }

        const lambdaParams = {
            runtime: Lambda.Runtime.NODEJS_14_X,
            code: Lambda.Code.fromInline(code),
            timeout: Duration.minutes(1),
            // layers: Array.isArray(options.layers) ? [...options.layers] : [],
            // code: Lambda.Code.fromAsset(lambdaDef.path),
            allowPublicSubnet: vpc ? true : undefined,
            securityGroups: sgs,
            handler: 'index.handler',
            vpc,
            environment: { ...options.env }
        } as Lambda.FunctionProps



        const lambda = new Lambda.Function(this, options.name, lambdaParams)

        if (options && Array.isArray(options.access)) {
            options.access.forEach(fn => fn(lambda))
        }

        return lambda
    }

    createLayer(name: string, path: string) {
        const layer = new Lambda.LayerVersion(this, name, {
            removalPolicy: RemovalPolicy.DESTROY,
            code: Lambda.Code.fromAsset(path), // './layers/dax'
        })
        return layer
    }

}
