import { Provider } from '@nestjs/common';
import { PetRepository } from './database/pet.repository';
import { CreatePetService } from './use-cases/create-pet/create-pet.service';
import { DeletePetService } from './use-cases/delete-pet/delete-pet.service';
import { UpdatePetService } from './use-cases/update-pet/update-pet.service';

export const createPetSymbol = Symbol('createPet');

export const updatePetSymbol = Symbol('updatePet');

export const deletePetSymbol = Symbol('deletePet');

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

export const deletePetProvider: Provider = {
    provide: deletePetSymbol,
    useFactory: (petRepo: PetRepository): DeletePetService => {
        return new DeletePetService(petRepo);
    },
    inject: [PetRepository],
};
