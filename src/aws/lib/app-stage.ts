import { Stage } from 'aws-cdk-lib'
import {Construct} from "constructs";
import * as cdk from "aws-cdk-lib";

export class ApiBillingStage extends Stage {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

    }
}