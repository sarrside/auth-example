import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Etudiant extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  nom?: string;

  @property({
    type: 'string',
  })
  prenom?: string;

  @property({
    type: 'date',
  })
  dateNaissance?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Etudiant>) {
    super(data);
  }
}

export interface EtudiantRelations {
  // describe navigational properties here
}

export type EtudiantWithRelations = Etudiant & EtudiantRelations;
