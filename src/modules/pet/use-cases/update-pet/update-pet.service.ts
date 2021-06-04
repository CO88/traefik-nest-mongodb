import { PetRepositoryPort } from '@modules/pet/database/pet.repository.interface';
import { PetProps } from '@modules/pet/domain/entities/pet.entity';

export class UpdatePetService {
    constructor(private readonly petRepo: PetRepositoryPort) {}

    async updatePet(id: string, petProps: Partial<PetProps>): Promise<boolean> {
        return await this.petRepo.updateOneByNameOrThrow(id, petProps);
    }
}
