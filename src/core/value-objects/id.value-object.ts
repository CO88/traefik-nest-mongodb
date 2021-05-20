import { v4 as uuidV4, validate } from 'uuid';
import { DomainPrimitive, ValueObject } from '../bases/value-object.base';
import { ArgumentInvalidException } from '../exceptions/argument-invalid.exception';

export class ID extends ValueObject<string> {
    constructor(value: string) {
        super({ value });
    }

    static generate(): ID {
        return new ID(uuidV4());
    }

    protected validate({ value }: DomainPrimitive<string>): void {
        if (!validate(value)) {
            throw new ArgumentInvalidException('Incorrect ID format');
        }
    }
}
