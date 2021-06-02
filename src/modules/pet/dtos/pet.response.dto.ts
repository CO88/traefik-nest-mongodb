import { ResponseBase } from 'src/interface-adapters/base-classes/response.base';
import { Pet } from 'src/interface-adapters/interfaces/pet/pet.interface';
import { PetEntity } from '../domain/entities/pet.entity';

export class PetResponse extends ResponseBase implements Pet {
    constructor(pet: PetEntity) {
        super(pet);

        this.name = pet.name;
        this.animalType = pet.animalType;
        this.pictureUrl = pet?.pictureUrl;
        this.birthDate = pet?.birthDate;
    }

    name: string;
    animalType: string;
    pictureUrl?: string;
    birthDate?: Date;
}
