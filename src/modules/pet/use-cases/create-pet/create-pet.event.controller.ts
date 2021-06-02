import { createPetSymbol } from '@modules/pet/pet.providers';
import { Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IdResponse } from 'src/interface-adapters/dtos/id.response.dto';
import { CreatePetCommand } from './create-pet.command';
import { CreatePetRequest } from './create-pet.request.dto';
import { CreatePetService } from './create-pet.service';

export class CreatePetEventController {
    constructor(
        @Inject(createPetSymbol)
        private readonly createPet: CreatePetService,
    ) {}

    @MessagePattern('pet.create')
    async create(payload: CreatePetRequest): Promise<IdResponse> {
        const command = new CreatePetCommand({
            name: payload.name,
            animalType: payload.animalType,
            pictureUrl: payload.pictureUrl,
            birthDate: payload.birthDate,
        });

        const id = await this.createPet.createPet(command);

        return new IdResponse(id.value);
    }
}
