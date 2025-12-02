import {Duration, Stack} from 'aws-cdk-lib';
import {Runtime} from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Construct} from 'constructs';
import * as path from 'path';

/**
 * Creates a sample Discord bot endpoint that can be used.
 */
export class DiscordServerlessStack extends Stack {
    /**
     * The constructor for building the stack.
     * @param {Construct} scope The Construct scope to create the stack in.
     * @param {string} id The ID of the stack to use.
     */
    constructor(scope: Construct, id: string) {
        super(scope, id);
    }
}