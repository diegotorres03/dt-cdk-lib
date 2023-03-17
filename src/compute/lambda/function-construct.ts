import {
  aws_lambda as Lambda,
  aws_ec2 as EC2,
  RemovalPolicy,
  Duration,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

const { warn } = console;

// function exampleUsage() {
//     const fn = new FunctionConstruct()
//     fn
//         .layer('s3:/bucket/folder/key')
//         .layer('./local/paht/to/assets')
//         .layer(function someFunction(params){console.log(params)})

//     fn.handler(function handler(event, context) {
//         console.log(event, runInNewContext)
//         return {success: true}
//     })

// }

export interface FunctionOptions {
  readonly name?: string;
  readonly env?: any;
  // readonly access: Function[];
  readonly vpc?: EC2.Vpc | string;
  readonly securityGroupIds?: string[];
  readonly layers?: Lambda.ILayerVersion[];
}

export class FunctionConstruct extends Construct {

  // layers: Map<string, Lambda.LayerVersion> = new Map();
  // layersToUse: Set<Lambda.LayerVersion> = new Set();

  layers: { [layerName: string]: Lambda.LayerVersion } = {};
  layersToUse: Array<Lambda.LayerVersion> = [];

  #functionName

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.#functionName = id
  }

  /**
   * create a layer from local file, s3 url or existing layer construct
   *
   * @author Diego Torres
   * @memberof FunctionConstruct
   * @param {string} name - layer friendly name
   * @param {string} path - local or s3 path to layer folder
   * @return {Lambda.LayerVersion}
   */
  createLayer(name: string, path: string): Lambda.LayerVersion {
    console.info(`creating layer ${name} using ${path}`);
    const layer = new Lambda.LayerVersion(this, name, {
      removalPolicy: RemovalPolicy.DESTROY,
      code: Lambda.Code.fromAsset(path), // './layers/dax'
    });
    this.layers[name] = layer;
    return layer;
  }

  useLayer(name: string) {
    const layer = this.layers[name];
    if (!layer) return warn(`layer ${name} not found!`);
    this.layersToUse.push(layer);
  }

  /**
   * here is where you add or reference the lambda code
   *
   * @param {string} functionCode - function code in the target language as a string,
   * or a ./path/to/file or s3://path/to/file
   * @param {FunctionOptions} options
   * @return {*}
   * @memberof FunctionConstruct
   */
  handler(functionCode: string, options: FunctionOptions) {
    const name = options.name ?? this.#functionName

    let vpc;
    let sgs;
    if (options.vpc) {
      vpc = options.vpc === 'default' ?
        EC2.Vpc.fromLookup(this, 'default-vpc-' + name, { isDefault: true }) :
        options.vpc as EC2.Vpc;
      sgs = [EC2.SecurityGroup.fromLookupByName(this, 'defaultSG-' + name, 'default', vpc)];
      //  sgs = Array.isArray(options.securityGroupIds) ? options.securityGroupIds
      //     .map(sgId => EC2.SecurityGroup.fromSecurityGroupId(this, 'sgid', sgId)) : []
      // console.log('sgids', options.securityGroupIds)
      // console.log(sgs)
    }


    const lambdaParams = {
      runtime: Lambda.Runtime.NODEJS_14_X,
      code: getCode(functionCode),
      timeout: Duration.minutes(1),
      layers: this.layersToUse,
      // code: Lambda.Code.fromAsset(lambdaDef.path),
      allowPublicSubnet: vpc ? true : undefined,
      securityGroups: sgs,
      handler: 'index.handler',
      vpc,
      environment: { ...options.env },
    } as Lambda.FunctionProps;

    const lambda = new Lambda.Function(this, name + '-handler', lambdaParams);

    // if (options && Array.isArray(options.access)) {
    //     options.access.forEach(fn => fn(lambda));
    // }

    return lambda;
  }

}


function getCode(source: string) {
  if (source.includes('s3://')) {
    // const bucket = ''
    // const key = ''
    // return Lambda.Code.fromBucket(bucket, key)
    console.warn('this method hasn`t being implemented');
  }

  if (source.includes('./')) return Lambda.Code.fromAsset(source);

  let code;
  //   const functionCodeStr = source

  if (source.includes('exports.handler = ')) {
    // console.log('full function')
    code = `(${source})()`;
  } else {
    // console.log('handler function')
    code = `(function() {
            exports.handler = ${source}
        })()`;
    // console.log(code)
  }
  return Lambda.Code.fromInline(code);
}
