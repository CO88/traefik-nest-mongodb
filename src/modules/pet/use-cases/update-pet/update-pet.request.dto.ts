import { IsOptional, IsString, MaxLength } from 'class-validator';
import { UpdatePet } from 'src/interface-adapters/interfaces/pet/update.pet.interface';

export class UpdatePetRequest implements UpdatePet {
    @MaxLength(200)
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    animalType?: string;

    @IsOptional()
    @IsString()
    pictureUrl?: string;

    @IsOptional()
    @IsString()
    birthDate?: Date;
}
