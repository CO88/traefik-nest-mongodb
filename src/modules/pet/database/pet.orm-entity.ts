import { TypeOrmMongoEntityBase } from 'src/infrastructure/database/bases/typeorm-mongo.entity.base';
import { Column, Entity } from 'typeorm';

@Entity('pet')
export class PetOrmEntity extends TypeOrmMongoEntityBase {
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
