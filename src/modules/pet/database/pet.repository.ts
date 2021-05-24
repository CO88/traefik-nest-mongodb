import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryParams } from 'src/core/ports/repository.ports';
import {
    TypeormRepositoryBase,
    WhereCondition,
} from 'src/infrastructure/database/bases/typeorm.repository.base';
import { Repository } from 'typeorm';
import { PetEntity, PetProps } from '../domain/entities/pet.entity';
import { PetOrmEntity } from './pet.orm-entity';
import { PetOrmMapper } from './pet.orm-mapper';
import { PetRepositoryPort } from './pet.repository.interface';

@Injectable()
export class PetRepository
    extends TypeormRepositoryBase<PetEntity, PetProps, PetOrmEntity>
    implements PetRepositoryPort
{
    protected relations: string[] = [];

    constructor(
        @InjectRepository(PetOrmEntity)
        private readonly petRepository: Repository<PetOrmEntity>,
    ) {
        super(
            petRepository,
            new PetOrmMapper(PetEntity, PetOrmEntity),
            new Logger('user-repository'),
        );

        console.log(petRepository.manager.connection);
    }

    private async findOneByName(
        name: string,
    ): Promise<PetOrmEntity | undefined> {
        const pet = await this.petRepository.findOne({
            where: { name },
        });

        return pet;
    }

    async exists(name: string): Promise<boolean> {
        const found = await this.findOneByName(name);
        if (found) {
            return true;
        }

        return false;
    }

    protected prepareQuery(
        params: QueryParams<PetProps>,
    ): WhereCondition<PetOrmEntity> {
        const where: QueryParams<PetOrmEntity> = {};
        if (params.id) {
            where.id = params.id.value;
        }
        return where;
    }
}
