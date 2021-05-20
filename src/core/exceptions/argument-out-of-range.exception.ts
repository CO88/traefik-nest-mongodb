import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.types';

export class ArgumentOutOfRangeException extends ExceptionBase {
    readonly name = Exceptions.argumentOutOfRange;
}
