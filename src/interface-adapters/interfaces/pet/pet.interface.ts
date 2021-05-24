import { ModelBase } from '../model.base.interface';

export interface Pet extends ModelBase {
    name: string;
    animalType: string;
    pictureUrl?: string;
    birthDate?: Date;
}
