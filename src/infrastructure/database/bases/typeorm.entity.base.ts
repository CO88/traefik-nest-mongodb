import { CreateDateColumn, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

export abstract class TypeOrmEntityBase {
    constructor(props?: unknown) {
        if (props) {
            Object.assign(this, props);
            console.log('----------------11-----------------');
            console.log(this);
            console.log('----------------11-----------------');
        }
    }

    @ObjectIdColumn({
        primary: true,
        update: false,
        type: 'varchar',
        name: 'id',
    })
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
