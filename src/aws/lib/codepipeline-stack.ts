import {
    Stack,
    pipelines,
    aws_iam as iam,
} from 'aws-cdk-lib'

const { CodePipeline, CodePipelineSource, ShellStep } = pipelines
import {ApiBillingStage} from './app-stage'
import {Construct} from "constructs";
import * as cdk from "aws-cdk-lib";

export class CodepipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        const params = {
            repo: 'LaDfBC/Strat-o-matic-bot',
            branch: 'master',
        };

        const connectionArn = 'arn:aws:codeconnections:us-east-1:023487918592:connection/b897c10d-6491-4f1e-9280-964289c4940f'

        const { repo, branch } = params

        const pipeline = new CodePipeline(this, 'Pipeline', {
            dockerEnabledForSynth: true,
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.connection(repo, branch, { connectionArn }),
                commands: ['npm ci', 'npx cdk synth'],
            }),
            synthCodeBuildDefaults: {
                rolePolicy: [
                    new iam.PolicyStatement({
                        effect: iam.Effect.ALLOW,
                        actions: ['sts:AssumeRole', 'iam:PassRole'],
                        resources: ['arn:aws:iam::*:role/cdk-*'],
                    })
                ],

            },
        })

        // The first stage is added after we started using nested stacks so it includes the one that needs to be first
        // pipeline.addStage(new ApiBillingStage(this, 'api-billing', props))
        // pipeline.buildPipeline()
    }
}