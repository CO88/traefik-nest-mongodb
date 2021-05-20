import { TypeOrmEntityBase } from 'src/infrastructure/database/bases/typeorm.entity.base';
import { Column, Entity } from 'typeorm';

@Entity('pets')
export class Pet extends TypeOrmEntityBase {
    constructor(pet?: Partial<Pet>) {
        super(pet);
    }

    @Column() name: string;
    @Column() animalType: string;
    @Column() pictureUrl?: string;
    @Column() birthDate?: Date;
}
