import { routes } from '@config/app.routes';
import { deletePetSymbol } from '@modules/pet/pet.providers';
import { Controller, Delete, Inject, Query } from '@nestjs/common';
import { DeletePetService } from './delete-pet.service';

@Controller()
export class DeletePetHttpController {
    constructor(
        @Inject(deletePetSymbol)
        private readonly service: DeletePetService,
    ) {}

    @Delete(routes.pet.root)
    async delete(@Query('id') id: string): Promise<void> {
        await this.service.deletePet(id);
    }
}
