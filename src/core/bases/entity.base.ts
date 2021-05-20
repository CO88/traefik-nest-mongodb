import { ArgumentNotProvidedException } from '../exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from '../exceptions/argument-out-of-range.exception';
import { Guard } from '../guard';
import { DateVO } from '../value-objects/date.value-object';
import { ID } from '../value-objects/id.value-object';

export interface BaseEntityProps {
    id: ID;
    createdAt: DateVO;
    updatedAt: DateVO;
}

export abstract class Entity<EntityProps> {
    constructor(props: EntityProps) {
        this.validateProps(props);
        this._id = ID.generate();
        const now = DateVO.now();
        this._createdAt = now;
        this._updatedAt = now;
        this.props = props;
    }

    protected readonly props: EntityProps;

    private readonly _id: ID;

    private readonly _createdAt: DateVO;

    private _updatedAt: DateVO;

    get id(): ID {
        return this._id;
    }

    get createdAt(): DateVO {
        return this._createdAt;
    }

    get updatedAt(): DateVO {
        return this._updatedAt;
    }

    static isEntity(entity: unknown): entity is Entity<unknown> {
        return entity instanceof Entity;
    }

    // 여기 작성해야합니다.

    private validateProps(props: EntityProps) {
        const maxProps = 50;

        if (Guard.isEmpty(props)) {
            throw new ArgumentNotProvidedException(
                'Entity props should be an object',
            );
        }
        if (Object.keys(props).length > maxProps) {
            throw new ArgumentOutOfRangeException(
                `Entity props should not have more then ${maxProps} properties`,
            );
        }
    }
}
