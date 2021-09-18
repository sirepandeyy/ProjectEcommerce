export declare class SNS_SQS {
    private static instance;
    private topicARNMap;
    private queueURLMap;
    private serviceMethodTopicsMap;
    private channel;
    private constructor();
    static getInstance(): SNS_SQS;
    private init_AWS_SNS_SQS;
    publishMessageToTopics(serviceName: string, topicName: string, methodName: string, message: any): void;
    publishMessageToTopic(topicName: any, message: any): Promise<void>;
    listenToService(topicName: any, serviceName: any, callBack: any): Promise<void>;
    listenToServices(serviceName: any, callback: any): void;
}
