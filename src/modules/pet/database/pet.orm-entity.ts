import { TypeOrmEntityBase } from 'src/infrastructure/database/bases/typeorm.entity.base';
import { Column, Entity } from 'typeorm';

@Entity('pet')
export class PetOrmEntity extends TypeOrmEntityBase {
    constructor(props?: PetOrmEntity) {
        super(props);
    }

    @Column()
    name: string;

    @Column()
    animalType: string;

    @Column()
    pictureUrl?: string;

    @Column()
    birthDate?: Date;
}
