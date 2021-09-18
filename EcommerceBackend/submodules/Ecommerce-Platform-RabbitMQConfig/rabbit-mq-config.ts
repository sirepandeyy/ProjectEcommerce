module.exports = {
  Topics: [
    {
      TopicName: "USERS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_ADD-USERS_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },
    {TopicName: "USERS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "USERS_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS_UPDATE-USERS_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },
  {  TopicName: "USERS_DELETE",
    Publishers: ["API_GATEWAY_SERVICE"],
    Method: "POST",
    Subscribers: [
      {
        Service: "USERS_SERVICE",
        Function: "InsertChannel",
        OnSuccessTopicsToPush: ["USERS_DELETED"],
        OnFailureTopicsToPush: ["ERROR_RECEIVER"],
        QueueName: "USERS_DELETE-USERS_SERVICE",
        QueueUrl:
          "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
        QueueArn:
          "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
        SubscriptionArn:
          "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
      },
    ],
    TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
  },



  {
    TopicName: "TENANTS_ADD",
    Publishers: ["API_GATEWAY_SERVICE"],
    Method: "POST",
    Subscribers: [
      {
        Service: "TENANTS_SERVICE",
        Function: "InsertChannel",
        OnSuccessTopicsToPush: ["TENANTS_ADDED"],
        OnFailureTopicsToPush: ["ERROR_RECEIVER"],
        QueueName: "TENANTS_ADD-TENANTS_SERVICE",
        QueueUrl:
          "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
        QueueArn:
          "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
        SubscriptionArn:
          "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
      },
    ],
    TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
  },
  {TopicName: "TENANTS_UPDATE",
    Publishers: ["API_GATEWAY_SERVICE"],
    Method: "POST",
    Subscribers: [
      {
        Service: "TENANTS_SERVICE",
        Function: "InsertChannel",
        OnSuccessTopicsToPush: ["TENANTS_UPDATED"],
        OnFailureTopicsToPush: ["ERROR_RECEIVER"],
        QueueName: "TENANTS_UPDATE-TENANTS_SERVICE",
        QueueUrl:
          "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
        QueueArn:
          "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
        SubscriptionArn:
          "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
      },
    ],
    TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
  },
{  TopicName: "TENANTS_DELETE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANTS_DELETED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANTS_DELETE-TENANTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USERS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USERS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USERS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USERS_ADD-TENANT_USERS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USERS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USERS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USERS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USERS_UPDATE-TENANT_USERS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USERS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USERS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USERS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USERS_DELETE-TENANT_USERS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USER_APPS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APPS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APPS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APPS_ADD-TENANT_USER_APPS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USER_APPS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APPS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APPS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APPS_UPDATE-TENANT_USER_APPS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USER_APPS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USER_APPS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USER_APPS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USER_APPS_DELETE-TENANT_USER_APPS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USER_APP_ROLES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ROLES_ADD-TENANT_USER_APP_ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USER_APP_ROLES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ROLES_UPDATE-TENANT_USER_APP_ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USER_APP_ROLES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USER_APP_ROLES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USER_APP_ROLES_DELETE-TENANT_USER_APP_ROLES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USER_APP_ALERTS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ALERTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ALERTS1_ADD-TENANT_USER_APP_ALERTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USER_APP_ALERTS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ALERTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ALERTS1_UPDATE-TENANT_USER_APP_ALERTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USER_APP_ALERTS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USER_APP_ALERTS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USER_APP_ALERTS1_DELETE-TENANT_USER_APP_ALERTS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_APPS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APPS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APPS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APPS_ADD-TENANT_APPS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_APPS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APPS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APPS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APPS_UPDATE-TENANT_APPS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_APPS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_APPS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_APPS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_APPS_DELETE-TENANT_APPS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_APP_FEATURES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APP_FEATURES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APP_FEATURES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APP_FEATURES_ADD-TENANT_APP_FEATURES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_APP_FEATURES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APP_FEATURES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APP_FEATURES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APP_FEATURES_UPDATE-TENANT_APP_FEATURES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_APP_FEATURES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_APP_FEATURES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_APP_FEATURES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_APP_FEATURES_DELETE-TENANT_APP_FEATURES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "ROLES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["ROLES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ROLES_ADD-ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "ROLES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["ROLES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ROLES_UPDATE-ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "ROLES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "ROLES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["ROLES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "ROLES_DELETE-ROLES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "FEATURES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURES_ADD-FEATURES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "FEATURES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURES_UPDATE-FEATURES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "FEATURES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "FEATURES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["FEATURES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "FEATURES_DELETE-FEATURES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "FEATURE_PERMISSIONS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURE_PERMISSIONS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURE_PERMISSIONS_ADD-FEATURE_PERMISSIONS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "FEATURE_PERMISSIONS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURE_PERMISSION_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURE_PERMISSION_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURE_PERMISSION_UPDATE-FEATURE_PERMISSION_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "FEATURE_PERMISSION_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "FEATURE_PERMISSION_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["FEATURE_PERMISSION_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "FEATURE_PERMISSION_DELETE-FEATURE_PERMISSION_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "CLIENTS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "CLIENTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["CLIENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "CLIENTS_ADD-CLIENTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "CLIENTS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "CLIENTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["CLIENTS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "CLIENTS_UPDATE-CLIENTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "CLIENTS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "CLIENTS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["CLIENTS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "CLIENTS_DELETE-CLIENTS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "APPS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APPS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APPS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APPS_ADD-APPS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APPS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APPS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APPS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APPS_UPDATE-APPS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APPS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APPS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APPS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APPS_DELETE-APPS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "APP_ROLES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_ROLES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_ROLES_ADD-APP_ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APP_ROLES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_ROLES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_ROLES_UPDATE-APP_ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APP_ROLES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APP_ROLES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APP_ROLES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APP_ROLES_DELETE-APP_ROLES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "APP_MESSAGES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_MESSAGES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_MESSAGES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_MESSAGES_ADD-APP_MESSAGES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APP_MESSAGES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_MESSAGES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_MESSAGES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_MESSAGES_UPDATE-APP_MESSAGES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APP_MESSAGES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APP_MESSAGES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APP_MESSAGES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APP_MESSAGES_DELETE-APP_MESSAGES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},










{
  TopicName: "APP_USERS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_USERS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_USERS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_USERS_ADD-APP_USERS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APP_USERS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_USERS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_USERS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_USERS_UPDATE-APP_USERS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APP_USERS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APP_USERS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APP_USERS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APP_USERS_DELETE-APP_USERS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
}







,
{
  TopicName: "APP_ROLES_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_ROLES_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_ROLES_ADD-APP_ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APP_ROLES_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_ROLES_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_ROLES_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_ROLES_UPDATE-APP_ROLES_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APP_ROLES_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APP_ROLES_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APP_ROLES_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APP_ROLES_DELETE-APP_ROLES_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
}

,









{
  TopicName: "PRODUCTS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "PRODUCTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["PRODUCTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "PRODUCTS_ADD-PRODUCTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "PRODUCTS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "PRODUCTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["PRODUCTS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "PRODUCTS_UPDATE-PRODUCTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "PRODUCTS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "PRODUCTS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["PRODUCTS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "PRODUCTS_DELETE-PRODUCTS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
}
,














{
  TopicName: "ORDERS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ORDERS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["ORDERS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ORDERS_ADD-ORDERS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "ORDERS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ORDERS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["ORDERS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ORDERS_UPDATE-ORDERS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "ORDERS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "ORDERS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["ORDERS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "ORDERS_DELETE-ORDERS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},








{
  TopicName: "ORDER_ITEMS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ORDER_ITEMS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["ORDER_ITEMS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ORDER_ITEMS_ADD-ORDER_ITEMS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "ORDER_ITEMS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ORDER_ITEMS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["ORDER_ITEMS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ORDER_ITEMS_UPDATE-ORDER_ITEMS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "ORDER_ITEMS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "ORDER_ITEMS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["ORDER_ITEMS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "ORDER_ITEMS_DELETE-ORDER_ITEMS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},






{
  TopicName: "LINKS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "LINKS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["LINKS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "LINKS_ADD-LINKS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "LINKS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "LINKS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["LINKS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "LINKS_UPDATE-LINKS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "LINKS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "LINKS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["LINKS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "LINKS_DELETE-LINKS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},











{
  TopicName: "CARTS_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "CARTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["CARTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "CARTS_ADD-CARTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "CARTS_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "CARTS_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["CARTS_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "CARTS_UPDATE-CARTS_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "CARTS_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "CARTS_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["CARTS_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "CARTS_DELETE-CARTS_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
}

  ],
};
