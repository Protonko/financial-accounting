import {Test, TestingModule} from '@nestjs/testing'
import {getRepositoryToken} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {UserController} from '../user.controller'
import {UserService} from '../user.service'
import {User} from '../entities/user.entity'
import {MockType} from '../../model/MockType'
import {repositoryMockFactory} from '../../static/repositoryMockFactory'
import {CREATE_USER_DTO, USER_WITHOUT_PASSWORD} from '../../static/mockData'

describe('UserController', () => {
  let controller: UserController
  let repositoryMock: MockType<Repository<User>>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {provide: getRepositoryToken(User), useFactory: repositoryMockFactory},
      ],
    }).compile()

    repositoryMock = module.get(getRepositoryToken(User));
    controller = module.get<UserController>(UserController)
  })

  it('Should create user', () => {
    repositoryMock.save.mockReturnValue(USER_WITHOUT_PASSWORD);
    expect(controller.create(CREATE_USER_DTO)).toBeDefined()
  })
})
