import { DomainPrimitive, ValueObject } from '../bases/value-object.base';
import { ArgumentInvalidException } from '../exceptions/argument-invalid.exception';

export class DataVO extends ValueObject<Date> {
    constructor(value: Date | string | number) {
        const date = new Date(value);
        super({ value: date });
    }

    public get value(): Date {
        return this.props.value;
    }

    public static now(): DataVO {
        return new DataVO(Date.now());
    }

    protected validate({ value }: DomainPrimitive<Date>): void {
        if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
            throw new ArgumentInvalidException('Incorrect date');
        }
    }
}
