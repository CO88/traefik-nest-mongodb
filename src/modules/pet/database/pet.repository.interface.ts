import { RepositoryPort } from 'src/core/ports/repository.ports';
import { PetEntity, PetProps } from '../domain/entities/pet.entity';

export interface PetRepositoryPort extends RepositoryPort<PetEntity, PetProps> {
    findOneByNameOrThrow(name: string): Promise<PetEntity>;
    updateOneByNameOrThrow(
        id: string,
        props: Partial<PetProps>,
    ): Promise<boolean>;
    exists(name: string): Promise<boolean>;
}
