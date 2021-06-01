import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class TypeOrmDefaultEntityBase {
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
