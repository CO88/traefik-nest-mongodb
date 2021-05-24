import { DomainEvent } from 'src/core/domain-events';
import { ID } from 'src/core/value-objects/id.value-object';

export class PetCreatedDomainEvent extends DomainEvent {
    constructor(
        public readonly aggregateId: ID,
        public readonly name: string,
        public readonly animalType: string,
        public readonly pictureUrl?: string,
        public readonly birthDate?: Date,
    ) {
        super();
    }
}
