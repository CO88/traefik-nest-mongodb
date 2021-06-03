import { Provider } from '@nestjs/common';
import { PetRepository } from './database/pet.repository';
import { CreatePetService } from './use-cases/create-pet/create-pet.service';
import { UpdatePetService } from './use-cases/update-pet/update-pet.service';

export const createPetSymbol = Symbol('createPet');

export const updatePetSymbol = Symbol('updatePet');

export const createPetProvider: Provider = {
    provide: createPetSymbol,
    useFactory: (petRepo: PetRepository): CreatePetService => {
        return new CreatePetService(petRepo);
    },
    inject: [PetRepository],
};

export const updatePetProvider: Provider = {
    provide: updatePetSymbol,
    useFactory: (petRepo: PetRepository): UpdatePetService => {
        return new UpdatePetService(petRepo);
    },
    inject: [PetRepository],
};
