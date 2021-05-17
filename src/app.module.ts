import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './infrastructure/configs/ormconfig';

@Module({
    imports: [TypeOrmModule.forRoot(typeormConfig)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
