import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './infrastructure/configs/ormconfig';
import { PetOrmEntity } from '@modules/pet/database/pet.orm-entity';
import { PetRepository } from '@modules/pet/database/pet.repository';
import { PetModule } from '@modules/pet/pet.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeormConfig),
        TypeOrmModule.forFeature([PetOrmEntity]),
        PetModule,
    ],
    controllers: [],
    providers: [PetRepository],
})
export class AppModule {}
