import { AlarmService } from '@modules/alarm/alarm.service';
import { PetCreatedDomainEvent } from '@modules/pet/domain/events/pet-created.domain-event';
import { DomainEventHandler, DomainEvents } from 'src/core/domain-events';

export class OnPetCreatedDomainEvent implements DomainEventHandler {
    constructor(private readonly alarm: AlarmService) {}

    public listen(): void {
        DomainEvents.subscribe(
            PetCreatedDomainEvent,
            this.onPetCreated.bind(this),
        );
    }

    async onPetCreated(event: PetCreatedDomainEvent): Promise<void> {
        await this.alarm.send(event.name, 'Welcome message goes here');
    }
}
