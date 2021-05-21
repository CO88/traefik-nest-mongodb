import { RepositoryPort } from 'src/core/ports/repository.ports';
import { PetEntity, PetProps } from '../domain/entities/pet.entity';

export type PetRepositoryPort = RepositoryPort<PetEntity, PetProps>;
