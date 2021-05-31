import { Entity } from '../bases/entity.base';
import { ValueObject } from '../bases/value-object.base';

export function convertPropsToObject(props: any): any {
    const propsCopy = { ...props };

    for (const prop in propsCopy) {
        if (Array.isArray(propsCopy[prop])) {
            propsCopy[prop] = (propsCopy[prop] as Array<unknown>).map(
                (item) => {
                    return convertToRaw(item);
                },
            );
        }
    }

    return propsCopy;
}

function convertToRaw(item: any): any {
    if (ValueObject.isValueObject(item)) {
        return item.getRawProps();
    }
    if (isEntity(item)) {
        return item.toObject();
    }

    return item;
}

function isEntity(obj: unknown): obj is Entity<unknown> {
    return (
        Object.prototype.hasOwnProperty.call(obj, 'toObject') &&
        Object.prototype.hasOwnProperty.call(obj, 'id') &&
        ValueObject.isValueObject((obj as Entity<unknown>).id)
    );
}
