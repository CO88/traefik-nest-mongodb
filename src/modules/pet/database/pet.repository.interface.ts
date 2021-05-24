import { RepositoryPort } from 'src/core/ports/repository.ports';
import { PetEntity, PetProps } from '../domain/entities/pet.entity';

export interface PetRepositoryPort extends RepositoryPort<PetEntity, PetProps> {
    exists(name: string): Promise<boolean>;
}
