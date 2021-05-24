import {
    OrmEntityProps,
    OrmMapper,
} from 'src/infrastructure/database/bases/orm-mapper.base';
import { PetEntity, PetProps } from '../domain/entities/pet.entity';
import { PetOrmEntity } from './pet.orm-entity';

export class PetOrmMapper extends OrmMapper<PetEntity, PetOrmEntity> {
    protected toOrmProps(entity: PetEntity): OrmEntityProps<PetOrmEntity> {
        const props = entity.getPropsCopy();

        const ormProps: OrmEntityProps<PetOrmEntity> = {
            name: props.name,
            animalType: props.animalType,
            pictureUrl: props.pictureUrl,
            birthDate: props.birthDate,
        };
        return ormProps;
    }

    protected toDomainProps(ormEntity: PetOrmEntity): PetProps {
        const props: PetProps = {
            name: ormEntity.name,
            animalType: ormEntity.animalType,
            pictureUrl: ormEntity.pictureUrl,
            birthDate: ormEntity.birthDate,
        };
        return props;
    }
}
