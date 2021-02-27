import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Etudiant, EtudiantRelations} from '../models';

export class EtudiantRepository extends DefaultCrudRepository<
  Etudiant,
  typeof Etudiant.prototype.id,
  EtudiantRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Etudiant, dataSource);
  }
}
