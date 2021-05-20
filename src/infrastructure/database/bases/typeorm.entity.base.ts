import {
    CreateDateColumn,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

export abstract class TypeOrmEntityBase {
    constructor(props?: unknown) {
        if (props) {
            Object.assign(this, props);
        }
    }

    @ObjectIdColumn({ update: false })
    id!: ObjectID;

    @CreateDateColumn({
        type: 'timestamptz',
        update: false,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    updatedAt: Date;
}
