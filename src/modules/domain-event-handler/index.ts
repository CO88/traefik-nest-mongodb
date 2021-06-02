import { AlarmService } from '@modules/alarm/alarm.service';
import { DomainEventHandler } from 'src/core/domain-events';
import { OnPetCreatedDomainEvent } from './pet-created.event-handler';

// 이벤트를 등록합니다.
const domainEventHandler: DomainEventHandler[] = [
    new OnPetCreatedDomainEvent(new AlarmService()),
];

export function initDomainEventHandlers(): void {
    domainEventHandler.forEach((eventHandler: DomainEventHandler) =>
        eventHandler.listen(),
    );
}
