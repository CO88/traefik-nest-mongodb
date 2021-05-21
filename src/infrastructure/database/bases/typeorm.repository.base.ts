// import { BaseEntityProps } from 'src/core/bases/entity.base';
// import { RepositoryPort } from 'src/core/ports/repository.ports';
// import { Repository } from 'typeorm';
// import { OrmMapper } from './orm-mapper.base';

// export abstract class TypeormRepositoryBase<
//     Entity extends BaseEntityProps,
//     EntityProps,
//     OrmEntity,
// > implements RepositoryPort<Entity, EntityProps>
// {
//     protected constructor(
//         protected readonly repository: Repository<Entity>,
//         protected readonly mapper: OrmMapper<Entity, EntityProps>,
//     ) {}

//     protected abstract relations: string[] = [];

//     protected tableName = this.repository.metadata.tableName;

//     protected abstract
// }
