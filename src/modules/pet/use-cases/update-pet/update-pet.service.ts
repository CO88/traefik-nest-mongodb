import { PetRepositoryPort } from '@modules/pet/database/pet.repository.interface';
import { PetEntity } from '@modules/pet/domain/entities/pet.entity';
import { UpdatePetCommand } from './update-pet.command';
import { NotFoundException } from 'src/core/exceptions/not-found.exception';
import { ID } from 'src/core/value-objects/id.value-object';

export class UpdatePetService {
    constructor(private readonly petRepo: PetRepositoryPort) {}

    async updatePet(command: UpdatePetCommand): Promise<ID> {
        if (await !this.petRepo.exists(command.name)) {
            throw new NotFoundException();
        }

        const pet = new PetEntity(command);

        const updated = await this.petRepo.updateOneByNameOrThrow(pet);

        return updated.id;
    }
}
