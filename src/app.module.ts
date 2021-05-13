import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './application/app.service';
import { typeormConfig } from './infrastructure/configs/ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeormConfig),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
