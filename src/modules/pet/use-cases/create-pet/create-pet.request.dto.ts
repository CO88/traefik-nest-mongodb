import { IsDate, IsString, MaxLength } from 'class-validator';
import { CreatePet } from 'src/interface-adapters/interfaces/pet/create.pet.interface';

export class CreatePetRequest implements CreatePet {
    @MaxLength(200)
    @IsString()
    name: string;

    @IsString()
    animalType: string;

    @IsString()
    pictureUrl?: string;

    @IsString()
    birthDate?: Date;
}
