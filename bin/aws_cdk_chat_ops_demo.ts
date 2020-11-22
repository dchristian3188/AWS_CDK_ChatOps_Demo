#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkChatOpsDemoStack } from '../lib/aws_cdk_chat_ops_demo-stack';

const app = new cdk.App();
new AwsCdkChatOpsDemoStack(app, 'AwsCdkChatOpsDemoStack');
