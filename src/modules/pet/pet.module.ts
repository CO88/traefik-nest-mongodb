import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetOrmEntity } from './database/pet.orm-entity';
import { PetRepository } from './database/pet.repository';
import { createPetProvider } from './pet.providers';
import { CreatePetHttpController } from './use-cases/create-pet/create-pet.http.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PetOrmEntity])],
    controllers: [CreatePetHttpController],
    providers: [PetRepository, createPetProvider],
})
export class PetModule {}
