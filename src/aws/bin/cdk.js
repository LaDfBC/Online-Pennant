#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { CodepipelineStack } from '../lib/codepipeline-stack.ts';
const app = new App();
new CodepipelineStack(app, 'api-billing-stack-cdk', {
    env: {
        account: '023487918592',
        region: 'us-east-1',
    },
});
app.synth();
//# sourceMappingURL=cdk.js.map