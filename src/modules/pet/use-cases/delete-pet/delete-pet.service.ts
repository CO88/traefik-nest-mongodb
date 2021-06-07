import { PetRepositoryPort } from '@modules/pet/database/pet.repository.interface';

export class DeletePetService {
    constructor(private readonly petRepo: PetRepositoryPort) {}

    async deletePet(id: string): Promise<void> {
        const found = await this.petRepo.findOneByIdOrThrow(id);
        await this.petRepo.delete(found);
    }
}
