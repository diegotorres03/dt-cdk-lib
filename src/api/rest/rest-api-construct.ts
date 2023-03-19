
import { Construct } from 'constructs'
import * as Dynamo from 'aws-cdk-lib/aws-dynamodb'
import * as ApiGateway from 'aws-cdk-lib/aws-apigateway'
import { FunctionConstruct } from '../../compute'
import { WebAppConstruct } from '../../webapp/webapp-construct'


const unimplementedError = new Error('this method has not been implemented, feel free to contribute =)')


/**
 *
 * @author Diego Tores <diegotorres0303@gmail.com>
 *
 * @export
 * @class RestApiConstruct
 * @extends {Construct}
 */
export class RestApiConstruct extends Construct {

    private currentAuthorizer?
    private currentHandler?
    private api: ApiGateway.RestApi



    constructor(scope: Construct, id: string) {
        super(scope, id)


        this.api = new ApiGateway.RestApi(this, id + '_api', {
            deployOptions: { stageName: process.env.STAGE || 'dev' },

        })



        // const exampleAuthorizer = './path/to/auth'
        // const exampleHandler = (ev => ({ statusCode: 204 })).toString()

        // const dynamo = {} as Construct
        // const api = this
        // api
        //     .cors() // this add default cors
        //     .authorizer(exampleAuthorizer)
        //     .get('/users', exampleHandler).readFrom(dynamo)
        //     .post('/users/{userId}', exampleHandler).writeTo(dynamo)




    }

    /**
     * enable cors for this API
     * 
     * @author Diego Tores <diegotorres0303@gmail.com>
     *
     * @param {ApiGateway.CorsOptions} [options]
     * @return {*}  {RestApiConstruct}
     * @memberof RestApiConstruct
     */
    cors(options?: ApiGateway.CorsOptions): RestApiConstruct {
        const defaultOptions = {
            allowOrigins: ApiGateway.Cors.ALL_ORIGINS,
            allowMethods: ApiGateway.Cors.ALL_METHODS,
            allowHeaders: [
                'Content-type', 'X-Amz-Date', 'X-Api-Key', 'Authorization',
                'Access-Controll-Allow-Headers', 'Access-Controll-Allow-Origins', 'Access-Controll-Allow-Methods',
            ],
            allowCredentials: true,
        }
        const corsOptions = options || defaultOptions

        this.api.root.addCorsPreflight(corsOptions)
        return this
    }

    /**
     * add a webapp construct on cors
     *
     * @param {WebAppConstruct} webapp
     * @return {*}  {RestApiConstruct}
     * @memberof RestApiConstruct
     */
    addToCors(webapp: WebAppConstruct): RestApiConstruct {
        // const origin = webapp.
        throw unimplementedError
        return this
    }

    /**
     * create an authorizer and use it in the followin lambdas until a new authorizer is created
     *
     * @author Diego Tores <diegotorres0303@gmail.com>
     * 
     * @param {string} handlerCode
     * @return {*}  {RestApiConstruct}
     * @memberof RestApiConstruct
     */
    authorizer(handlerCode: string): RestApiConstruct {
        this.currentAuthorizer = handlerCode



        return this
    }


    /**
     * let the last created lambda hace read access to a given construct
     * 
     * Supported targets:
     * - DynamoDB
     *
     * @author Diego Tores <diegotorres0303@gmail.com>
     * 
     * @param {Construct} construct
     * @return {*}  {RestApiConstruct}
     * @memberof RestApiConstruct
     */
    readFrom(construct: Construct): RestApiConstruct {

        // if Dynamo
        const table = construct as Dynamo.Table;
        table.grantReadData(this.currentHandler)


        return this
    }

    /**
     * let the last created lambda hace write access to a given construct
     * 
     * Supported targets:
     * - DynamoDB
     *
     * @author Diego Tores <diegotorres0303@gmail.com>
     * 
     * @param {Construct} construct
     * @return {*}  {RestApiConstruct}
     * @memberof RestApiConstruct
     */
    writeTo(construct: Construct): RestApiConstruct {


        // if Dynamo
        const table = construct as Dynamo.Table;
        table.grantWriteData(this.currentHandler)


        return this
    }

    private createMethodIntegration(method: string, path: string, handlerCode: string, options?: any) {

        console.log('use authorizer here', this.currentAuthorizer)
        const fn = new FunctionConstruct(this, `${method}_${path}_handler`)
        fn.handler(handlerCode)
        // [ ] deals with options
        
        // [ ] deal with layers
        const integration = new ApiGateway.LambdaIntegration(fn.handlerFn) // {proxy: true}
        this.api.root.resourceForPath(path)
        .addMethod(method, integration)
        
        this.currentHandler = fn.handlerFn
    }

    get(path: string, handlerCode: string): RestApiConstruct {
        this.createMethodIntegration('GET', path, handlerCode)
        return this
    }

    post(path: string, handlerCode: string): RestApiConstruct {
        this.createMethodIntegration('POST', path, handlerCode)
        return this
    }

    put(path: string, handlerCode: string): RestApiConstruct {
        this.createMethodIntegration('PUT', path, handlerCode)
        return this
    }

    delete(path: string, handlerCode: string): RestApiConstruct {
        this.createMethodIntegration('DELETE', path, handlerCode)
        return this
    }


    options(path: string, handlerCode: string): RestApiConstruct {
        this.createMethodIntegration('OPTIONS', path, handlerCode)
        return this
    }

    head(path: string, handlerCode: string): RestApiConstruct {
        this.createMethodIntegration('HEAD', path, handlerCode)
        return this
    }

}
