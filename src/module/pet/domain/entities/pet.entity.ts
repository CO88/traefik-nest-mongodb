import { AggregateRoot } from 'src/core/bases/aggregate-root.base';
import { PetCreatedDomainEvent } from '../events/pet-created.domain-event';

export interface PetProps {
    name: string;
    animalType: string;
    pictureUrl?: string;
    birthDate?: Date;
}

export class PetEntity extends AggregateRoot<PetProps> {
    constructor(props: PetProps) {
        super(props);

        this.addEvent(
            new PetCreatedDomainEvent(
                this.id,
                this.props.name,
                this.props.animalType,
                this.props.pictureUrl,
                this.props.birthDate,
            ),
        );
    }

    get name(): string {
        return this.props.name;
    }

    get animalType(): string {
        return this.props.animalType;
    }

    get pictureUrl(): string {
        return this.props.pictureUrl;
    }

    get birthDate(): Date {
        return this.props.birthDate;
    }

    someBusinessLogic(): void {
        // TODO: add example business logic
    }

    static validate(props: PetProps): void {
        // TODO: example
        // entity business rules validation to protect it's invariant
    }
}
