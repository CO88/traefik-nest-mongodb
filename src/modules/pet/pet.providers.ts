import { Provider } from '@nestjs/common';
import { PetRepository } from './database/pet.repository';
import { CreatePetService } from './use-cases/create-pet/create-pet.service';

export const createPetSymbol = Symbol('createPet');

export const createPetProvider: Provider = {
    provide: createPetSymbol,
    useFactory: (petRepo: PetRepository): CreatePetService => {
        return new CreatePetService(petRepo);
    },
    inject: [PetRepository],
};
