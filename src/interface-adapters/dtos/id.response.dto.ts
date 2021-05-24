import { Id } from '../interfaces/id.interface';

export class IdResponse implements Id {
    constructor(id: string) {
        this.id = id;
    }

    id: string;
}
