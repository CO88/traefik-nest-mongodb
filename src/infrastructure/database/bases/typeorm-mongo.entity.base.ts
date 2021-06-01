import {
    CreateDateColumn,
    ObjectIdColumn,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { TypeOrmEntityBase } from './typeorm.entity.base';

export abstract class TypeOrmMongoEntityBase implements TypeOrmEntityBase {
    constructor(props?: unknown) {
        if (props) {
            Object.assign(this, props);
        }
    }

    @PrimaryColumn()
    id: string;

    @ObjectIdColumn({ primary: true, name: '_id' })
    _id: string;

    @CreateDateColumn({
        type: 'timestamp',
        update: false,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
    })
    updatedAt: Date;
}
