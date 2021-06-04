import { routes } from '@config/app.routes';
import { updatePetSymbol } from '@modules/pet/pet.providers';
import { Body, Controller, Inject, Patch, Query } from '@nestjs/common';
import { IdResponse } from 'src/interface-adapters/dtos/id.response.dto';
import { UpdatePetCommand } from './update-pet.command';
import { UpdatePetRequest } from './update-pet.request.dto';
import { UpdatePetService } from './update-pet.service';

@Controller()
export class UpdatePetHttpController {
    constructor(
        @Inject(updatePetSymbol)
        private readonly updatePet: UpdatePetService,
    ) {}

    @Patch(routes.pet.root)
    async update(
        @Query('id') id: string,
        @Body() body: UpdatePetRequest,
    ): Promise<boolean> {
        return await this.updatePet.updatePet(id, body);
    }
}
