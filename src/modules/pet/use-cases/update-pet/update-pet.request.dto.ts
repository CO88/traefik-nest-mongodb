import { IsDate, IsString, MaxLength } from 'class-validator';
import { UpdatePet } from 'src/interface-adapters/interfaces/pet/update.pet.interface';

export class UpdatePetRequest implements UpdatePet {
    @MaxLength(200)
    @IsString()
    name?: string;

    @IsString()
    animalType?: string;

    @IsString()
    pictureUrl?: string;

    @IsDate()
    birthDate?: Date;
}
