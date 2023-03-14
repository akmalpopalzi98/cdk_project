import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Function as LamdaFunction, Runtime,Code} from 'aws-cdk-lib/aws-lambda'
import {join} from 'path'
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway'


export class SpaceStack extends Stack {

    private api = new RestApi (this,'spaceapi')
    constructor(scope:Construct,id:string,props: StackProps){
        super(scope,id,props)

            const helloLambda = new LamdaFunction(this,'hello-lamda',{
            runtime: Runtime.NODEJS_14_X,
            code: Code.fromAsset(join(__dirname,'..','services','hello')),
            handler:'hello.main'

        })

        // Hello API integregation:
            const helloLambdaInt = new LambdaIntegration(helloLambda)
            const helloLambdaRes = this.api.root.addResource('hello');
            helloLambdaRes.addMethod('GET',helloLambdaInt)

    }
}