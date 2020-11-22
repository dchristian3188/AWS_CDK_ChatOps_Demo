import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cloudwatch from '@aws-cdk/aws-cloudwatch'
import * as cloudwatchActions from '@aws-cdk/aws-cloudwatch-actions'
import * as sns from '@aws-cdk/aws-sns'
import fs = require('fs');

export class AwsCdkChatBotDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ChatBot SNS
    const chatOptTopic = new sns.Topic(this,'ChatBotDemoTopic',{
      displayName: "ChatBot Demo SNS Topic"
    })

    //Demo Lambda
    const demoLambda = new lambda.Function(this, 'ChatBotDemoLambda', {
      functionName: "ChatBotDemoLambda",
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: new lambda.InlineCode(fs.readFileSync('lib/ChatBot-demo-lambda.js', { encoding: 'utf-8' })),
    });

    //CloudWatch Metrics for Demo Lambda
    const lambdaAlarm = demoLambda.metricErrors().createAlarm(this,'ChatBotDemoAlarm',{
      evaluationPeriods: 1,
      threshold: 1,
      alarmName: "ChatBotDemoLambdaErrorAlarm",
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    })
    
    lambdaAlarm.addAlarmAction(new cloudwatchActions.SnsAction(chatOptTopic))
    
  }
}
