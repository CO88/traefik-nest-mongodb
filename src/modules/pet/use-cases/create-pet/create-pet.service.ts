import { ConflictException } from 'src/core/exceptions/conflict.exception';
import { ID } from 'src/core/value-objects/id.value-object';
import { PetRepositoryPort } from '../../database/pet.repository.interface';
import { PetEntity } from '../../domain/entities/pet.entity';
import { CreatePetCommand } from './create-pet.command';

export class CreatePetService {
    constructor(
        // no direct dependency on a repository, instead depends on port
        private readonly petRepo: PetRepositoryPort,
    ) {}

    async createPet(command: CreatePetCommand): Promise<ID> {
        if (await this.petRepo.exists(command.name)) {
            throw new ConflictException('Pet Name already exists');
        }

        const pet = new PetEntity(command);

        pet.someBusinessLogic();

        const created = await this.petRepo.save(pet);

        return created.id;
    }
}
