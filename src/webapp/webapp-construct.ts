import { execSync } from 'child_process';
import { log } from 'console';
import {
  aws_s3 as S3,
  aws_s3_deployment as S3Deployment,
  aws_cloudfront as CloudFront,
  aws_cloudfront_origins as CloudFrontOrigins,
  CfnOutput,
  RemovalPolicy,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';


import { FunctionConstruct } from '../compute'

const { ORIGIN_REQUEST, ORIGIN_RESPONSE, VIEWER_REQUEST, VIEWER_RESPONSE } = CloudFront.LambdaEdgeEventType



export class WebAppConstruct extends Construct {

  static readonly EVENT_TYPES = CloudFront.LambdaEdgeEventType

  private additionalBehaviors: CloudFront.BehaviorOptions[] = []
  private cdnDistribution: CloudFront.Distribution
  private defaultOrigin: CloudFrontOrigins.S3Origin

  webappBucket: S3.Bucket;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // [ ] 1.1.1: create S3 Bucket as web hosting to store webapp [docs](https://docs.aws.amazon.com/cdk/api/v1/docs/aws-s3-readme.html)
    this.webappBucket = new S3.Bucket(this, 'webapp-artifact', {
      accessControl: S3.BucketAccessControl.PRIVATE,
      cors: [{
        allowedMethods: [S3.HttpMethods.GET],
        allowedOrigins: ['*'],

        // the properties below are optional
        allowedHeaders: ['Authorization'],
        exposedHeaders: [],
      }],
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new CfnOutput(this, 'webappBucketName', {
      value: this.webappBucket.bucketName,
    });
    // exportName: 'webappBucketName'


    // [ ] 1.3.1: create Route 53 record set [docs](https://docs.aws.amazon.com/cdk/api/v1/docs/aws-route53-readme.html)
    // const domainName = props?.domainName || `${Date.now()}.diegotrs.com`

    // const hostedZone = new Route53.HostedZone(this, 'hoztedZone', { zoneName: domainName })

    // const cert = new ACM.DnsValidatedCertificate(this, 'webapp-cert', {
    //     domainName: domainName,
    //     hostedZone,

    // })
    // const record


    // [ ] 1.2.1: create CloudFront distribution [docs](https://docs.aws.amazon.com/cdk/api/v1/docs/aws-cloudfront-readme.html)
    const originAccessIdentity = new CloudFront.OriginAccessIdentity(this, 'OriginAccessIdentity');


    // allow clowdfront to read s3 webpp files
    this.webappBucket.grantRead(originAccessIdentity);

    this.defaultOrigin = new CloudFrontOrigins.S3Origin(this.webappBucket, { originAccessIdentity })
    this.cdnDistribution = new CloudFront.Distribution(this, 'WebappDistribution', {
      defaultRootObject: 'index.html',

      defaultBehavior: {
        origin: this.defaultOrigin,
      },


      // certificate: cert,
      // domainNames: [domainName]
    });


    new CfnOutput(this, 'webappDnsUrl', {
      value: this.cdnDistribution.distributionDomainName,
    });
    // exportName: 'webappDnsUrl'

    new CfnOutput(this, 'distributionId', {
      value: this.cdnDistribution.distributionId,
    });
    // exportName: 'distributionId'


  //   const webapp = this


  //   webapp.addAssets('./app')
  //   webapp.onViewerRequest('users/*', (ev => console.log(ev)).toString())
  //   webapp.onViewerResponse('users/*', (ev => console.log(ev)).toString())
  //   webapp.onOriginRequest('users/*', (ev => console.log(ev)).toString())
  //   webapp.onOriginRequest('users/*', (ev => console.log(ev)).toString())



  //   const handler = (ev => console.log(ev)).toString()

  //   webapp
  //     .path('users/*')
  //     .onOriginRequest(handler)
  //     .onOriginResponse(handler)
  //     .onViewerRequest(handler)
  //     .onViewerResponse(handler)

  }


  path(path: string) {
    const methods = {
      onViewerRequest: (handlerCode: string) => {
        this.onViewerRequest(path, handlerCode)
        return methods
      },
      onViewerResponse: (handlerCode: string) => {
        this.onViewerResponse(path, handlerCode)
        return methods
      },
      onOriginRequest: (handlerCode: string) => {
        this.onOriginRequest(path, handlerCode)
        return methods
      },
      onOriginResponse: (handlerCode: string) => {
        this.onOriginResponse(path, handlerCode)
        return methods
      },
    }
    return methods
  }

  onViewerRequest(path: string, handlerCode: string) {

    const eventType = VIEWER_REQUEST
    const fn = new FunctionConstruct(this, `${path}/${eventType}`)
    fn.handler(handlerCode)

    if(!fn.handlerFn) throw new Error('handler fn not created')
    

    // [ ] optimize to reuse this piece of code in the rest
    this.cdnDistribution.addBehavior(path, this.defaultOrigin, {
      edgeLambdas: [{
        eventType,
        functionVersion: fn.handlerFn?.currentVersion,
        includeBody: true
      }]
    })

  }

  // [ ] instead of creating the behaviour on each call, can I group them?
  onViewerResponse(path: string, handlerCode: string) {

    const eventType = VIEWER_RESPONSE
    const fn = new FunctionConstruct(this, `${path}/${eventType}`)
    fn.handler(handlerCode)

    if(!fn.handlerFn) throw new Error('handler fn not created')
    

    // [ ] optimize to reuse this piece of code in the rest
    this.cdnDistribution.addBehavior(path, this.defaultOrigin, {
      edgeLambdas: [{
        eventType,
        functionVersion: fn.handlerFn?.currentVersion,
        includeBody: true
      }]
    })
  }

  onOriginRequest(path: string, handlerCode: string) {

    const eventType = ORIGIN_REQUEST
    const fn = new FunctionConstruct(this, `${path}/${eventType}`)
    fn.handler(handlerCode)

    if(!fn.handlerFn) throw new Error('handler fn not created')
    

    // [ ] optimize to reuse this piece of code in the rest
    this.cdnDistribution.addBehavior(path, this.defaultOrigin, {
      edgeLambdas: [{
        eventType,
        functionVersion: fn.handlerFn?.currentVersion,
        includeBody: true
      }]
    })
  }

  onOriginResponse(path: string, handlerCode: string) {

    const eventType = ORIGIN_RESPONSE
    const fn = new FunctionConstruct(this, `${path}/${eventType}`)
    fn.handler(handlerCode)

    if(!fn.handlerFn) throw new Error('handler fn not created')
    

    // [ ] optimize to reuse this piece of code in the rest
    this.cdnDistribution.addBehavior(path, this.defaultOrigin, {
      edgeLambdas: [{
        eventType,
        functionVersion: fn.handlerFn?.currentVersion,
        includeBody: true
      }]
    })
  }




  /**
     * Use this metod to upload application artifacts
     * add local assets to the remote store (S3 Bucket)
     * be mindfull of size, use this method for small bundles.
     *
     * if you want to send large files, consider using multipart uploads
     * after deploying infraestructure
     *
     * @param {string} path
     * @param {string} [destinationPath]
     * @return {*}
     * @memberof WebAppConstruct
     */
  addAssets(path: string, destinationPath?: string): WebAppConstruct {
    new S3Deployment.BucketDeployment(this, 'deployStaticWebapp', {
      sources: [S3Deployment.Source.asset(path)],
      destinationBucket: this.webappBucket,
      destinationKeyPrefix: destinationPath ? destinationPath : undefined,
    });
    return this;
  }


  /**
     * Run local comands before uploading assets and creating infraestructure
     *
     *
     * @param {string} path
     * @param {(string | string[])} commands
     * @memberof WebAppConstruct
     */
  run(path: string, commands: string | string[]): WebAppConstruct {
    const cmds = Array.isArray(commands) ? commands : [commands];
    for (let cmd of cmds) {
      const res = execSync(cmd, {
        cwd: path,
        stdio: [0, 1, 2],
      });
      log(res);
    }
    return this;
  }

}
