import { BaseEntityProps } from 'src/core/bases/entity.base';

export class ResponseBase {
    constructor(entity: BaseEntityProps) {
        this.id = entity.id?.value as string;
        this.createdAt = (entity.createdAt?.value as Date).toISOString();
        this.updatedAt = (entity.updatedAt?.value as Date).toISOString();
    }

    id: string;
    createdAt: string;
    updatedAt: string;
}
