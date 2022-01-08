import {MockType} from '../model/MockType'
import {Repository} from 'typeorm'

export const repositoryMockFactory: <T>() => MockType<Repository<T>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  save: jest.fn(entity => entity),
}))
