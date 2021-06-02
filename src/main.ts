import { initDomainEventHandlers } from '@modules/domain-event-handler';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    initDomainEventHandlers();

    await app.listen(3000);
}
bootstrap();
