import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Etudiant} from '../models';
import {EtudiantRepository} from '../repositories';

export class EtudiantController {
  constructor(
    @repository(EtudiantRepository)
    public etudiantRepository : EtudiantRepository,
  ) {}

  @post('/etudiants')
  @response(200, {
    description: 'Etudiant model instance',
    content: {'application/json': {schema: getModelSchemaRef(Etudiant)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Etudiant, {
            title: 'NewEtudiant',
            exclude: ['id'],
          }),
        },
      },
    })
    etudiant: Omit<Etudiant, 'id'>,
  ): Promise<Etudiant> {
    return this.etudiantRepository.create(etudiant);
  }

  @get('/etudiants/count')
  @response(200, {
    description: 'Etudiant model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Etudiant) where?: Where<Etudiant>,
  ): Promise<Count> {
    return this.etudiantRepository.count(where);
  }

  @get('/etudiants')
  @response(200, {
    description: 'Array of Etudiant model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Etudiant, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Etudiant) filter?: Filter<Etudiant>,
  ): Promise<Etudiant[]> {
    return this.etudiantRepository.find(filter);
  }

  @patch('/etudiants')
  @response(200, {
    description: 'Etudiant PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Etudiant, {partial: true}),
        },
      },
    })
    etudiant: Etudiant,
    @param.where(Etudiant) where?: Where<Etudiant>,
  ): Promise<Count> {
    return this.etudiantRepository.updateAll(etudiant, where);
  }

  @get('/etudiants/{id}')
  @response(200, {
    description: 'Etudiant model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Etudiant, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Etudiant, {exclude: 'where'}) filter?: FilterExcludingWhere<Etudiant>
  ): Promise<Etudiant> {
    return this.etudiantRepository.findById(id, filter);
  }

  @patch('/etudiants/{id}')
  @response(204, {
    description: 'Etudiant PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Etudiant, {partial: true}),
        },
      },
    })
    etudiant: Etudiant,
  ): Promise<void> {
    await this.etudiantRepository.updateById(id, etudiant);
  }

  @put('/etudiants/{id}')
  @response(204, {
    description: 'Etudiant PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() etudiant: Etudiant,
  ): Promise<void> {
    await this.etudiantRepository.replaceById(id, etudiant);
  }

  @del('/etudiants/{id}')
  @response(204, {
    description: 'Etudiant DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.etudiantRepository.deleteById(id);
  }
}
