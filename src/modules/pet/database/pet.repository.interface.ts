import { RepositoryPort } from 'src/core/ports/repository.ports';
import { PetEntity, PetProps } from '../domain/entities/pet.entity';

export interface PetRepositoryPort extends RepositoryPort<PetEntity, PetProps> {
    findOneByNameOrThrow(name: string): Promise<PetEntity>;
    updateOneByNameOrThrow(petEntity: PetEntity): Promise<PetEntity>;
    exists(name: string): Promise<boolean>;
}
