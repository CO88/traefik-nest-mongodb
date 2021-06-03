import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from 'src/core/exceptions/not-found.exception';
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
    }

    private async findOneByName(
        name: string,
    ): Promise<PetOrmEntity | undefined> {
        const pet = await this.petRepository.findOne({
            where: { name },
        });

        return pet;
    }

    async findOneByNameOrThrow(name: string): Promise<PetEntity> {
        const pet = await this.findOneByName(name);
        if (!pet) {
            throw new NotFoundException();
        }

        return this.mapper.toDomainEntity(pet);
    }

    async updateOneByNameOrThrow(petEntity: PetEntity): Promise<PetEntity> {
        const petProps = this.mapper.toOrmEntity(petEntity);

        const result1 = await this.petRepository.findOne({
            id: petEntity.id.value,
        });
        const result = await this.petRepository.update(
            { id: petEntity.id.value },
            petProps,
        );

        console.log(petEntity.id.value);
        console.log(result);
        console.log(petProps);
        console.log(result1);
        return this.mapper.toDomainEntity(result.raw);
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
