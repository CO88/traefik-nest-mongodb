import { routes } from '@config/app.routes';
import { PetRepository } from '@modules/pet/database/pet.repository';
import { PetResponse } from '@modules/pet/dtos/pet.response.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { FindPetByNameRequest } from './find-pet-by-name.request.dto';

@Controller()
export class FindPetByNameHttpController {
    constructor(private readonly petRepo: PetRepository) {}

    @Get(routes.pet.root)
    async findPetByName(
        @Query() { name }: FindPetByNameRequest,
    ): Promise<PetResponse> {
        console.log(name);
        const pet = await this.petRepo.findOneByNameOrThrow(name);

        return new PetResponse(pet);
    }
}
