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

    @ObjectIdColumn({ primary: true, type: 'char', name: 'id' })
    id: string;

    // @PrimaryColumn({ update: false })
    // id: string;

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
