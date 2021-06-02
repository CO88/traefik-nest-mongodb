import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { TypeOrmEntityBase } from './typeorm.entity.base';

export abstract class TypeOrmDefaultEntityBase implements TypeOrmEntityBase {
    constructor(props?: unknown) {
        if (props) {
            Object.assign(this, props);
        }
    }

    @PrimaryColumn()
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
