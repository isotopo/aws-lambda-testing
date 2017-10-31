module.exports = {
    $CloudFormationCreateRequest:{
        Records: [
            {
                EventVersion: '1.0',
                EventSource: 'aws:sns',
                EventSubscriptionArn: 'arn:aws:sns:us-west-2:000000000:ses_messages:26a58451-3392-4ab6-a829-d65c2968421a',
                Sns: {
                    MessageId: '211121b2-7aa4-5a8f-91ec-705a468b3024',
                    Signature: 'askdfjhaslkdjfhalskjdfhalyrle234jh213k4jhl12k34h2134uqwf',
                    Type: 'Notification',
                    TopicArn: 'arn:aws:sns:us-west-2:00000000:ses_messages',
                    MessageAttributes: {},
                    SignatureVersion: '1',
                    Timestamp: '2017-07-18T16:40:15.619Z',
                    SigningCertUrl: 'https://sns.us-west-2.amazonaws.com/SimpleNotificationService-0000000.pem',
                    Message: 'StackId=\'arn:aws:cloudformation:us-west-2:000000000:stack/testlin/c6a2d3f0-6bd7-11e7-aed2-50a68a\'\nTimestamp=\'2017-07-18T16:40:15.346Z\'\nEventId=\'c6a3e560-6bd7-11e7-aed2-50012ba\'\nLogicalResourceId=\'testlin\'\nNamespace=\'000000000\'\nPhysicalResourceId=\'arn:aws:cloudformation:us-west-2:00000000:stack/testlin/c6a2d3f0-6bd7-11e7-aed2-50a68a2012ba\'\nPrincipalId=\'AROAJONWXY64:Isengard\'\nResourceProperties=\'null\'\nResourceStatus=\'CREATE_IN_PROGRESS\'\nResourceStatusReason=\'User Initiated\'\nResourceType=\'AWS::CloudFormation::Stack\'\nStackName=\'testlin\'\nClientRequestToken=\'Console-CreateStack-e18403e9-743c-4a8b-96aa-29361\'\n',
                    UnsubscribeUrl: 'https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:00000000:ses_messages:26a58451-3392-4ab6-a829-d65c29',
                    Subject: 'AWS CloudFormation Notification'
                }
            }
        ]
    },
    $SESEmailReceiving:{
        Records: [
            {
                EventVersion: '1.0',
                EventSource: 'aws:sns',
                EventSubscriptionArn: 'arn:aws:sns:us-west-2:0000000000:ses_messages:26a58451-3392-4ab6-a829-d65c2968421a',
                Sns: {
                    MessageId: '483eae4c-4fb0-57e5-a5f9-ff9b08612',
                    Signature: 'asdasdasdasdasdasd',
                    Type: 'Notification',
                    TopicArn: 'arn:aws:sns:us-west-2:0000000000:ses_messages',
                    MessageAttributes: {},
                    SignatureVersion: '1',
                    Timestamp: '2017-07-05T20:01:21.366Z',
                    SigningCertUrl: 'https://sns.us-west-2.amazonaws.com/SimpleNotificationService-00000000.pem',
                    Message: '{"notificationType":"Delivery","mail":{"timestamp":"2017-07-05T20:01:20.773Z","source":"example@amazon.com","sourceArn":"arn:aws:ses:us-west-2:0000000000:identity/example@amazon.com","sourceIp":"205.251.233.183","sendingAccountId":"0000000000","messageId":"0101017bd85-2ff839b3-c119-4311-b90c-5ce39eff3026-000000","destination":["example@amazon.com"]},"delivery":{"timestamp":"2017-07-05T20:01:21.302Z","processingTimeMillis":529,"recipients":["example@amazon.com"],"smtpResponse":"250 ok: Message 122614849 accepted","remoteMtaIp":"192.168.1.1","reportingMTA":"smtp-out.us-west-2.amazonses.com"}}',
                    UnsubscribeUrl: 'https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:0000000000:ses_messages:26a58451-3392-4ab6-a829-d65c1a',
                    Subject: null
                }
            }
        ]
    },
    ScheduledEvent:{
        'account': '123456789012',
        'region': 'us-east-1',
        'detail': {},
        'detail-type': 'Scheduled Event',
        'source': 'aws.events',
        'time': '1970-01-01T00:00:00Z',
        'id': 'cdc73f9d-aea9-11e3-9d5a-835b769c0d9c',
        'resources': [
            'arn:aws:events:us-east-1:123456789012:rule/my-schedule'
        ]
    },
    $CloudWatchLogs:{
        awslogs: {
            data: 'H4sIAAAAAAAAAHWPwQqCQBCGX0Xm7EFtK+smZBEUgXoLCdMhFtKV3akI8d0bLYmibvPPN3wz00CJxmQnTO41whwWQRIctmEcB6sQbFC3CjW3XW8kxpOpP+OC22d1Wml1qZkQGtoMsScxaczKN3plG8zlaHIta5KqWsozoTYw3/djzwhpLwivWFGHGpAFe7DL68JlBUk+l7KSN7tCOEJ4M3/qOI49vMHj+zCKdlFqLaU2ZHV2a4Ct/an0/ivdX8oYc1UVX860fQDQiMdxRQEAAA=='
        }
    },
    $SNS:{
        Records: [
            {
                EventVersion: '1.0',
                EventSubscriptionArn: 'arn',
                EventSource: 'aws:sns',
                Sns: {
                    SignatureVersion: '1',
                    Timestamp: '1970-01-01T00:00:00.000Z',
                    Signature: 'EXAMPLE',
                    SigningCertUrl: 'EXAMPLE',
                    MessageId: '95df01b4-ee98-5cb9-9903-4c221d41eb5e',
                    Message: 'Hello from SNS!',
                    MessageAttributes: {
                        Test: {
                            Type: 'String',
                            Value: 'TestString'
                        },
                        TestBinary: {
                            Type: 'Binary',
                            Value: 'TestBinary'
                        }
                    },
                    Type: 'Notification',
                    UnsubscribeUrl: 'EXAMPLE',
                    TopicArn: 'topicarn',
                    Subject: 'TestInvoke'
                }
            }
        ]
    },

    $DynamoDBUpdate:{
        Records: [
            {
                eventID: '1',
                eventVersion: '1.0',
                dynamodb: {
                    Keys: {
                        Id: {
                            N: '101'
                        }
                    },
                    NewImage: {
                        Message: {
                            S: 'New item!'
                        },
                        Id: {
                            N: '101'
                        }
                    },
                    StreamViewType: 'NEW_AND_OLD_IMAGES',
                    SequenceNumber: '111',
                    SizeBytes: 26
                },
                awsRegion: 'us-west-2',
                eventName: 'INSERT',
                eventSourceARN: 'eventsourcearn',
                eventSource: 'aws:dynamodb'
            },
            {
                eventID: '2',
                eventVersion: '1.0',
                dynamodb: {
                    OldImage: {
                        Message: {
                            S: 'New item!'
                        },
                        Id: {
                            N: '101'
                        }
                    },
                    SequenceNumber: '222',
                    Keys: {
                        Id: {
                            N: '101'
                        }
                    },
                    SizeBytes: 59,
                    NewImage: {
                        Message: {
                            S: 'This item has changed'
                        },
                        Id: {
                            N: '101'
                        }
                    },
                    StreamViewType: 'NEW_AND_OLD_IMAGES'
                },
                awsRegion: 'us-west-2',
                eventName: 'MODIFY',
                eventSourceARN: 'sourcearn',
                eventSource: 'aws:dynamodb'
            },
            {
                eventID: '3',
                eventVersion: '1.0',
                dynamodb: {
                    Keys: {
                        Id: {
                            N: '101'
                        }
                    },
                    SizeBytes: 38,
                    SequenceNumber: '333',
                    OldImage: {
                        Message: {
                            S: 'This item has changed'
                        },
                        Id: {
                            N: '101'
                        }
                    },
                    StreamViewType: 'NEW_AND_OLD_IMAGES'
                },
                awsRegion: 'us-west-2',
                eventName: 'REMOVE',
                eventSourceARN: 'sourcearn',
                eventSource: 'aws:dynamodb'
            }
        ]
    },

    $CognitoSyncTrigger:{
        datasetName: 'datasetName',
        eventType: 'SyncTrigger',
        region: 'us-east-1',
        identityId: 'identityId',
        datasetRecords: {
            SampleKey2: {
                newValue: 'newValue2',
                oldValue: 'oldValue2',
                op: 'replace'
            },
            SampleKey1: {
                newValue: 'newValue1',
                oldValue: 'oldValue1',
                op: 'replace'
            }
        },
        identityPoolId: 'identityPoolId',
        version: 2
    },

    $KinesisStreams:{
        Records: [
            {
                eventID: 'shardId-000000000000:49545115243490985018280067714973144582180062593244200961',
                eventVersion: '1.0',
                kinesis: {
                    partitionKey: 'partitionKey-3',
                    data: 'SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IDEyMy4=',
                    kinesisSchemaVersion: '1.0',
                    sequenceNumber: '49545115243490985018280067714973144582180062593244200961'
                },
                invokeIdentityArn: 'identityarn',
                eventName: 'aws:kinesis:record',
                eventSourceARN: 'eventsourcearn',
                eventSource: 'aws:kinesis',
                awsRegion: 'us-east-1'
            }
        ]
    },
    $S3Put:{
        Records: [
            {
                eventVersion: '2.0',
                eventTime: '1970-01-01T00:00:00.000Z',
                requestParameters: {
                    sourceIPAddress: '127.0.0.1'
                },
                s3: {
                    configurationId: 'testConfigRule',
                    object: {
                        eTag: '0123456789abcdef0123456789abcdef',
                        sequencer: '0A1B2C3D4E5F678901',
                        key: 'HappyFace.jpg',
                        size: 1024
                    },
                    bucket: {
                        arn: 'bucketarn',
                        name: 'sourcebucket',
                        ownerIdentity: {
                            principalId: 'EXAMPLE'
                        }
                    },
                    s3SchemaVersion: '1.0'
                },
                responseElements: {
                    'x-amz-id-2': 'EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH',
                    'x-amz-request-id': 'EXAMPLE123456789'
                },
                awsRegion: 'us-east-1',
                eventName: 'ObjectCreated:Put',
                userIdentity: {
                    principalId: 'EXAMPLE'
                },
                eventSource: 'aws:s3'
            }
        ]
    },

    $S3Delete:
    {
        Records: [
            {
                eventVersion: '2.0',
                eventTime: '1970-01-01T00:00:00.000Z',
                requestParameters: {
                    sourceIPAddress: '127.0.0.1'
                },
                s3: {
                    configurationId: 'testConfigRule',
                    object: {
                        sequencer: '0A1B2C3D4E5F678901',
                        key: 'HappyFace.jpg'
                    },
                    bucket: {
                        arn: 'bucketarn',
                        name: 'sourcebucket',
                        ownerIdentity: {
                            principalId: 'EXAMPLE'
                        }
                    },
                    s3SchemaVersion: '1.0'
                },
                responseElements: {
                    'x-amz-id-2': 'EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH',
                    'x-amz-request-id': 'EXAMPLE123456789'
                },
                awsRegion: 'us-east-1',
                eventName: 'ObjectRemoved:Delete',
                userIdentity: {
                    principalId: 'EXAMPLE'
                },
                eventSource: 'aws:s3'
            }
        ]
    },

    $Lex:{
        messageVersion: '1.0',
        invocationSource: 'FulfillmentCodeHook or DialogCodeHook',
        userId: 'user-id specified in the POST request to Amazon Lex.',
        sessionAttributes: {
            key1: 'value1',
            key2: 'value2'
        },
        bot: {
            name: 'bot-name',
            alias: 'bot-alias',
            version: 'bot-version'
        },
        outputDialogMode: 'Text or Voice, based on ContentType request header in runtime API request',
        currentIntent: {
            name: 'intent-name',
            slots: {
                'slot-name': 'value',
                'slot-name_1': 'value',
                'slot-name_2': 'value'
            },
            confirmationStatus: 'None, Confirmed, or Denied(intent confirmation, if configured)'
        }
    },
    $GatewayProxyRequest:{
        path: '/test/hello',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, lzma, sdch, br',
            'Accept-Language': 'en-US,en;q=0.8',
            'CloudFront-Forwarded-Proto': 'https',
            'CloudFront-Is-Desktop-Viewer': 'true',
            'CloudFront-Is-Mobile-Viewer': 'false',
            'CloudFront-Is-SmartTV-Viewer': 'false',
            'CloudFront-Is-Tablet-Viewer': 'false',
            'CloudFront-Viewer-Country': 'US',
            'Host': 'wt6mne2s9k.execute-api.us-west-2.amazonaws.com',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
            'Via': '1.1 fb7cca60f0ecd82ce07790c9c5eef16c.cloudfront.net (CloudFront)',
            'X-Amz-Cf-Id': 'nBsWBOrSHMgnaROZJK1wGCZ9PcRcSpq_oSXZNQwQ10OTZL4cimZo3g==',
            'X-Forwarded-For': '192.168.100.1, 192.168.1.1',
            'X-Forwarded-Port': '443',
            'X-Forwarded-Proto': 'https'
        },
        pathParameters: {
            proxy: 'hello'
        },
        requestContext: {
            accountId: '123456789012',
            resourceId: 'us4z18',
            stage: 'test',
            requestId: '41b45ea3-70b5-11e6-b7bd-69b5aaebc7d9',
            identity: {
                cognitoIdentityPoolId: '',
                accountId: '',
                cognitoIdentityId: '',
                caller: '',
                apiKey: '',
                sourceIp: '192.168.100.1',
                cognitoAuthenticationType: '',
                cognitoAuthenticationProvider: '',
                userArn: '',
                userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
                user: ''
            },
            resourcePath: '/{proxy+}',
            httpMethod: 'GET',
            apiId: 'wt6mne2s9k'
        },
        resource: '/{proxy+}',
        httpMethod: 'GET',
        queryStringParameters: {
            name: 'me'
        },
        stageVariables: {
            stageVarName: 'stageVarValue'
        }
    },
    $GatewayProxyResponse:{
        statusCode: 200,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, lzma, sdch, br',
            'Accept-Language': 'en-US,en;q=0.8',
            'CloudFront-Forwarded-Proto': 'https',
            'CloudFront-Is-Desktop-Viewer': 'true',
            'CloudFront-Is-Mobile-Viewer': 'false',
            'CloudFront-Is-SmartTV-Viewer': 'false',
            'CloudFront-Is-Tablet-Viewer': 'false',
            'CloudFront-Viewer-Country': 'US',
            'Host': 'wt6mne2s9k.execute-api.us-west-2.amazonaws.com',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
            'Via': '1.1 fb7cca60f0ecd82ce07790c9c5eef16c.cloudfront.net (CloudFront)',
            'X-Amz-Cf-Id': 'nBsWBOrSHMgnaROZJK1wGCZ9PcRcSpq_oSXZNQwQ10OTZL4cimZo3g==',
            'X-Forwarded-For': '192.168.100.1, 192.168.1.1',
            'X-Forwarded-Port': '443',
            'X-Forwarded-Proto': 'https'
        },
        body: 'Hello World'
    },

    $CloudFront:{
        Records: [
            {
                cf: {
                    config: {
                        distributionId: 'EDFDVBD6EXAMPLE'
                    },
                    request: {
                        clientIp: '2001:0db8:85a3:0:0:8a2e:0370:7334',
                        method: 'GET',
                        uri: '/picture.jpg',
                        headers: {
                            'host': [
                                {
                                    key: 'Host',
                                    value: 'd111111abcdef8.cloudfront.net'
                                }
                            ],
                            'user-agent': [
                                {
                                    key: 'User-Agent',
                                    value: 'curl/7.51.0'
                                }
                            ]
                        }
                    }
                }
            }
        ]
    },
    $Config:{
        invokingEvent: '{"configurationItem":{"configurationItemCaptureTime":"2016-02-17T01:36:34.043Z","awsAccountId":"000000000000","configurationItemStatus":"OK","resourceId":"i-00000000","ARN":"arn:aws:ec2:us-east-1:000000000000:instance/i-00000000","awsRegion":"us-east-1","availabilityZone":"us-east-1a","resourceType":"AWS::EC2::Instance","tags":{"Foo":"Bar"},"relationships":[{"resourceId":"eipalloc-00000000","resourceType":"AWS::EC2::EIP","name":"Is attached to ElasticIp"}],"configuration":{"foo":"bar"}},"messageType":"ConfigurationItemChangeNotification"}',
        ruleParameters: '{"myParameterKey":"myParameterValue"}',
        resultToken: 'myResultToken',
        eventLeftScope: false,
        executionRoleArn: 'arn:aws:iam::012345678912:role/config-role',
        configRuleArn: 'arn:aws:config:us-east-1:012345678912:config-rule/config-rule-0123456',
        configRuleName: 'change-triggered-config-rule',
        configRuleId: 'config-rule-0123456',
        accountId: '012345678912',
        version: '1.0'
    },
    $IoTButton:{
        serialNumber: 'ABCDEFG12345',
        clickType: 'SINGLE',
        batteryVoltage: '2000 mV'
    },
    $KinesisFirehose:{
        invocationId: 'invoked123',
        deliveryStreamArn: 'aws:lambda:events',
        region: 'us-west-2',
        records: [
            {
                data: 'SGVsbG8gV29ybGQ=',
                recordId: 'record1',
                approximateArrivalEpoch: 123456789,
                approximateArrivalTimestamp: '2017-01-01T00:00:00.000Z',
                kinesisRecordMetadata: {
                    shardId: 'shardId-000000000000',
                    partitionKey: '4d1ad2b9-24f8-4b9d-a088-76e9947c317a',
                    approximateArrivalTimestamp: '2012-04-23T18:25:43.511Z',
                    sequenceNumber: '49546986683135544286507457936321625675700192471156785154',
                    subsequenceNumber: ''
                }
            },
            {
                data: 'SGVsbG8gV29ybGQ=',
                recordId: 'record2',
                approximateArrivalEpoch: 123456789101112,
                approximateArrivalTimestamp: '2018-01-01T00:00:00.000Z',
                kinesisRecordMetadata: {
                    shardId: 'shardId-000000000001',
                    partitionKey: '4d1ad2b9-24f8-4b9d-a088-76e9947c318a',
                    approximateArrivalTimestamp: '2012-04-23T19:25:43.511Z',
                    sequenceNumber: '49546986683135544286507457936321625675700192471156785155',
                    subsequenceNumber: ''
                }
            }
        ]
    }
};
