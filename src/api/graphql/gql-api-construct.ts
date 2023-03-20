import * as AppSync from 'aws-cdk-lib/aws-appsync'
import { Construct } from 'constructs';


export class GraphQlApiConstruct extends Construct {

    private api: AppSync.CfnGraphQLApi

    private schemaParts: string[] = []

    private currentOperation = ''

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const name = id + '_gql-api'

        this.api = new AppSync.CfnGraphQLApi(this, name, {
            name: name,
            authenticationType: 'API_KEY', //  API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT, or AWS_LAMBDA
            xrayEnabled: true,
            // logConfig: {}
        })

        const gql = this

        gql
            .addToSchema(`
              
type PatientData {
    tenentId: ID!
    resource: ID
    Data: String
}

input PatientDataInput {
    tenentId: ID!
    resource: ID
    Data: String
}

type PatientKey {
    tenentId: ID!
    resource: ID!
}

input PatientKeyInput {
    tenentId: ID!
    resource: ID!
}

type Query {
    listPatients(tenentId: ID): [PatientData]
    getPatient(key: PatientKeyInput): PatientData
}

type Mutation {
    createPatient(resource: PatientDataInput!): PatientData
}

type Subscription {
    onCreatePatient(patientFilter: PatientDataInput): PatientData
    @aws_subscribe(mutations:["createPatient"])
}

            `)
            .mutation('updateUser')
            .query()
            .subscription()
            .fn()
            .request((ev => ev).toString())
            .response((ev => ev).toString())


    }


    addToSchema(fragment: string): GraphQlApiConstruct {
        this.schemaParts.push(fragment)

        return this
    }

    mutation(name: string): GraphQlApiConstruct {
        this.currentOperation = 'mutation'

        return this
    }

    query(name: string): GraphQlApiConstruct {
        this.currentOperation = 'mutation'

        return this
    }
    subscription(name: string): GraphQlApiConstruct {
        this.currentOperation = 'mutation'

        return this
    }
}


