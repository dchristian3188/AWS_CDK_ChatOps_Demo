# ChatOps Demo

CDK Project to help bootstrap a demo for AWS ChatOps

## How to Execute the lambda

### Lambda 

    aws lambda invoke --function-name ChatOpsDemoLambda 

### Throw an Error

    aws lambda invoke --function-name ChatOpsDemoLambda --payload '{ "Error": 1 }' response.json --cli-binary-format raw-in-base64-out