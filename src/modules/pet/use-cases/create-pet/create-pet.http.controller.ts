import { Body, Controller, Inject, Post } from '@nestjs/common';
import { routes } from '@config/app.routes';
import { createPetSymbol } from '../../pet.providers';
import { CreatePetService } from './create-pet.service';
import { CreatePetRequest } from './create-pet.request.dto';
import { IdResponse } from 'src/interface-adapters/dtos/id.response.dto';
import { CreatePetCommand } from './create-pet.command';

@Controller()
export class CreatePetHttpController {
    constructor(
        @Inject(createPetSymbol)
        private readonly createPet: CreatePetService,
    ) {}

    @Post(routes.pet.root)
    async create(@Body() body: CreatePetRequest): Promise<IdResponse> {
        const command = new CreatePetCommand({
            name: body.name,
            animalType: body.animalType,
            pictureUrl: body.pictureUrl,
            birthDate: body.birthDate,
        });

        console.log(command);

        const id = await this.createPet.createPet(command);

        return new IdResponse(id.value);
    }
}
