import { MiddlewareConsumer, NestModule } from "@nestjs/common";
export declare class EntityModule implements NestModule {
    constructor();
    configure(consumer: MiddlewareConsumer): void;
}
