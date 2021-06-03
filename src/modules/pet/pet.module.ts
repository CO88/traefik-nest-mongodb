import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetOrmEntity } from './database/pet.orm-entity';
import { PetRepository } from './database/pet.repository';
import { createPetProvider, updatePetProvider } from './pet.providers';
import { CreatePetHttpController } from './use-cases/create-pet/create-pet.http.controller';
import { FindPetByNameHttpController } from './use-cases/find-pet-by-name/find-pet-by-name.http.controller';
import { UpdatePetHttpController } from './use-cases/update-pet/update-pet.http.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PetOrmEntity])],
    controllers: [
        CreatePetHttpController,
        FindPetByNameHttpController,
        UpdatePetHttpController,
    ],
    providers: [PetRepository, createPetProvider, updatePetProvider],
})
export class PetModule {}
