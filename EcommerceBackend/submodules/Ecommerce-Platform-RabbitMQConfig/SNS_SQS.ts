//using config file as per environment
//let rabbitMQURL = 'amqps://zzhwfsyy:rDNFZXOW2mIcHLhnS2CzL6AU8RxiHam2@baboon.rmq.cloudamqp.com/zzhwfsyy';
let configFileName = `rabbit-mq-config`;
let rabbitMQURL = "amqps://ihdmjiob:W9SoRNO8Ba-PMgf4HXoWVcInIy1yDk3_@beaver.rmq.cloudamqp.com/ihdmjiob"
var amqp = require("amqplib/callback_api");
const configData = require(`./${configFileName}`);

interface QueueURLMapValue {
  queueName: string[];
  OnSuccessTopicsToPush: string[];
  OnFailureTopicsToPush: string[];
}

export class SNS_SQS {
  private static instance: SNS_SQS;
  private topicARNMap: { [id: number]: number } = {};
  private queueURLMap: { [id: number]: QueueURLMapValue } = {};
  private serviceMethodTopicsMap: { [id: string]: string[] } = {};
  private channel = null;

  private constructor() {
    this.init_AWS_SNS_SQS();
  }

  public static getInstance(): SNS_SQS {
    if (!SNS_SQS.instance) {
      SNS_SQS.instance = new SNS_SQS();
    }
    return SNS_SQS.instance;
  }

  private async init_AWS_SNS_SQS() {
    try {
      console.log("connecting to amq ...", rabbitMQURL);
      amqp.connect(rabbitMQURL, (err, connection) => {
        if (err) {
          console.log(err);
          return;
        }
        connection.createChannel((err, channel) => {
          this.channel = channel;
          let topics = configData.Topics;
          for (let i = 0; i < topics.length; i++) {
            let topic = topics[i];
            let topicName = topic.TopicName;
            //create channel
            this.channel.assertExchange(topicName, "fanout", {
              durable: true,
            });

            let subscribers = topic.Subscribers;
            for (let j = 0; j < subscribers.length; j++) {
              let subscriber = subscribers[j];
              let queueName = subscriber.QueueName;
              let q = this.channel.assertQueue(queueName, {
                exclusive: false,
              });
              //bind the queue with exchange with queueName
              this.channel.bindQueue(queueName, topicName, "");
              let queueURLMapValue = {
                queueName: queueName,
                OnSuccessTopicsToPush: subscriber.OnSuccessTopicsToPush,
                OnFailureTopicsToPush: subscriber.OnFailureTopicsToPush,
              };
              this.queueURLMap[queueName] = queueURLMapValue;
            }
          }
        });

      });
    } catch (e) {
      console.log(e);
    }
  }

  public publishMessageToTopics(
    serviceName: string,
    topicName: string,
    methodName: string,
    message: any
  ) {
    this.publishMessageToTopic(topicName, message);
  }

  public async publishMessageToTopic(topicName, message) {
    // publish the message to topic
    this.channel.publish(topicName, "", Buffer.from(JSON.stringify(message)));
  }

  public async listenToService(topicName, serviceName, callBack) {
    try {
      var queueURLMapValue = this.queueURLMap[topicName + "-" + serviceName];
      var queueName = queueURLMapValue.queueName;
      // consume message from queue
      this.channel.consume(
        queueName,
        function (msg) {
          if (msg.content) {
            let message = JSON.parse(msg.content);
            callBack({
              message,
              OnSuccessTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush,
              OnFailureTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush
            });
          }
        },
        { noAck: true }
      );
    } catch (e) {
      setTimeout(() => {
        this.listenToService(topicName, serviceName, callBack);
      }, 5000)
    }
  }

  /**
    listen to services
  */
  public listenToServices(serviceName, callback) {
    let topics = configData.Topics;
    for (let i = 0; i < topics.length; i++) {
      let topic = topics[i];
      let topicName = topic.TopicName;
      let subscribers = topic.Subscribers;
      for (let j = 0; j < subscribers.length; j++) {
        let subscriber = subscribers[j];
        let vServiceName = subscriber.Service;
        if (vServiceName === serviceName) {
          this.listenToService(topicName, serviceName, callback);
        }
      }
    }
  }
}
