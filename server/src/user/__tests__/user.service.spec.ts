import {Test, TestingModule} from '@nestjs/testing'
import {getRepositoryToken} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {UserService} from '../user.service'
import {User} from '../entities/user.entity'
import {repositoryMockFactory} from '../../static/repositoryMockFactory'
import {CREATE_USER_DTO, USER_WITHOUT_PASSWORD} from '../../static/mockData'
import {MockType} from '../../model/MockType'

describe('UserService', () => {
  let service: UserService
  let repositoryMock: MockType<Repository<User>>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {provide: getRepositoryToken(User), useFactory: repositoryMockFactory},
      ],
    }).compile()

    repositoryMock = module.get(getRepositoryToken(User))
    service = module.get<UserService>(UserService)
  })

  it('Should create user', () => {
    repositoryMock.save.mockReturnValue(USER_WITHOUT_PASSWORD)
    expect(service.create(CREATE_USER_DTO)).toBeDefined()
  })

  it('Should return user by id', () => {
    repositoryMock.findOne.mockReturnValue(USER_WITHOUT_PASSWORD)
    expect(service.getById(1)).toBeDefined()
  })

  it('Should return user by email', () => {
    repositoryMock.findOne.mockReturnValue(USER_WITHOUT_PASSWORD)
    expect(service.getByEmail('foo@bar.baz')).toBeDefined()
  })
})
