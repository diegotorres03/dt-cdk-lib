import * as AppSync from 'aws-cdk-lib/aws-appsync'
// import * as DynamoDB from 'aws-cdk-lib/aws-dynamodb'

import { Construct } from 'constructs';

import { writeFileSync } from 'fs'

// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_appsync-readme.html

export class GraphQlApiConstruct extends Construct {

    private api?: AppSync.GraphqlApi

    private name: string

    private fieldName = ''

    private schemaParts: string[] = []

    private currentOperation = ''

    constructor(scope: Construct, id: string) {
        super(scope, id);

        this.name = id
        // const name = id + '_gql-api'

        // this.api = this.createApi(name)

        //         const gql = this

        //         gql
        //             .addToSchema(`
        // type demo {
        //     id: String!
        //     version: String!
        // }
        // type Query {
        //     getDemos: [ demo! ]
        // }
        // input DemoInput {
        //     version: String!
        // }
        // type Mutation {
        //     addDemo(input: DemoInput!): demo
        // }

        //             `)
        //             .mutation('addDemo')
        //             .toDB(table) // dynamo, aurorards
        //             .fn()
        //             .query('getDemos')
        //             // .subscription()
        //             .request((ev => ev).toString())
        //             .response((ev => ev).toString())


    }

    private createApi(schemaPath: string): AppSync.GraphqlApi {
        return new AppSync.GraphqlApi(this, this.name, {
            name: this.name,
            schema: AppSync.SchemaFile.fromAsset(schemaPath),
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: AppSync.AuthorizationType.API_KEY, //  API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT, or AWS_LAMBDA
                }
            },
            xrayEnabled: true,
            // logConfig: {}
        })
    }

    schema(value: string): GraphQlApiConstruct {
        let schemaPath = value
        if (!value.match(/^(.+)\/([^\/]+)$/g)) {
            const path = `./${this.name}.schema.gql`
            writeFileSync(path, value)
            schemaPath = path
        }

        this.api = this.createApi(schemaPath)
        return this
    }

    addToSchema(fragment: string): GraphQlApiConstruct {
        this.schemaParts.push(fragment)

        return this
    }


    // gql operations

    mutation(name: string): GraphQlApiConstruct {
        this.currentOperation = 'Mutation'
        this.fieldName = name

        return this
    }

    query(name: string): GraphQlApiConstruct {
        this.currentOperation = 'Query'
        this.fieldName = name

        return this
    }
    subscription(name: string): GraphQlApiConstruct {
        this.currentOperation = 'Subscription'
        this.fieldName = name

        return this
    }

    done() {
        console.log(this.api)
        console.log(this.fieldName)
        console.log(this.currentOperation)
    }

    // resolvers

    // toDB(table: DynamoDB.Table): GraphQlApiConstruct {
    //     if (!this.api) throw new Error('you must create an api first by calling the schema() method')

    //     const dataSourceName = `${this.currentOperation}_DynamoDataSource`
    //     const resolverName = `${this.currentOperation}_DynamoResolver`
    //     const dynamoDataSource = this.api.addDynamoDbDataSource(dataSourceName, table)

    //     const reqMappingTemplate = getMappingFromOperation(this.currentOperation)

    //     dynamoDataSource.createResolver(resolverName, {
    //         typeName: this.currentOperation,
    //         fieldName: this.fieldName,
    //         requestMappingTemplate: AppSync.MappingTemplate.dynamoDbPutItem()

    //     })

    //     return this
    // }


}


// function getMappingFromOperation(operation: string, table: DynamoDB.Table): { req: AppSync.MappingTemplate, res: AppSync.MappingTemplate } {
//     if (operation === 'Query') {
//         return {
//             req: AppSync.MappingTemplate.dynamoDbScanTable(),
//             res:AppSync.MappingTemplate.dynamoDbResultList(),
//         }
//     }
//     if(operation === 'Mutation') {
//         return {
//             req: AppSync.MappingTemplate.dynamoDbPutItem(AppSync.PrimaryKey.partition(table.)),
//             res:AppSync.MappingTemplate.dynamoDbResultItem(),
//         }
//     }
// }