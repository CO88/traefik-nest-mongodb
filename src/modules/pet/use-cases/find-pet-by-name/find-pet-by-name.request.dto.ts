import { MaxLength } from 'class-validator';
import { FindPetByName } from 'src/interface-adapters/interfaces/pet/find-pet-by-name.interface';

export class FindPetByNameRequest implements FindPetByName {
    @MaxLength(100)
    name: string;
}
