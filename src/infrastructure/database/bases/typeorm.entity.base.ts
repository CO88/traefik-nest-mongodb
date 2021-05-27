import {
    CreateDateColumn,
    ObjectIdColumn,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

export abstract class TypeOrmEntityBase {
    constructor(props?: unknown) {
        if (props) {
            Object.assign(this, props);
        }
    }

    @ObjectIdColumn({ primary: true, type: 'varchar', name: 'id' })
    id: string;

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
