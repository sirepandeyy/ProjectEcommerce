"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SNS_SQS = void 0;
let configFileName = `rabbit-mq-config`;
let rabbitMQURL = "amqps://ihdmjiob:W9SoRNO8Ba-PMgf4HXoWVcInIy1yDk3_@beaver.rmq.cloudamqp.com/ihdmjiob";
var amqp = require("amqplib/callback_api");
const configData = require(`./${configFileName}`);
class SNS_SQS {
    constructor() {
        this.topicARNMap = {};
        this.queueURLMap = {};
        this.serviceMethodTopicsMap = {};
        this.channel = null;
        this.init_AWS_SNS_SQS();
    }
    static getInstance() {
        if (!SNS_SQS.instance) {
            SNS_SQS.instance = new SNS_SQS();
        }
        return SNS_SQS.instance;
    }
    async init_AWS_SNS_SQS() {
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
        }
        catch (e) {
            console.log(e);
        }
    }
    publishMessageToTopics(serviceName, topicName, methodName, message) {
        this.publishMessageToTopic(topicName, message);
    }
    async publishMessageToTopic(topicName, message) {
        this.channel.publish(topicName, "", Buffer.from(JSON.stringify(message)));
    }
    async listenToService(topicName, serviceName, callBack) {
        try {
            var queueURLMapValue = this.queueURLMap[topicName + "-" + serviceName];
            var queueName = queueURLMapValue.queueName;
            this.channel.consume(queueName, function (msg) {
                if (msg.content) {
                    let message = JSON.parse(msg.content);
                    callBack({
                        message,
                        OnSuccessTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush,
                        OnFailureTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush
                    });
                }
            }, { noAck: true });
        }
        catch (e) {
            setTimeout(() => {
                this.listenToService(topicName, serviceName, callBack);
            }, 5000);
        }
    }
    listenToServices(serviceName, callback) {
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
exports.SNS_SQS = SNS_SQS;
//# sourceMappingURL=SNS_SQS.js.map