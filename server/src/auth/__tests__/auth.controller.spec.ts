import {Test, TestingModule} from '@nestjs/testing'
import {JwtService} from '@nestjs/jwt'
import {genSalt, hash} from 'bcrypt'
import {AuthController} from '../auth.controller'
import {AuthService} from '../auth.service'
import {UserService} from '../../user/user.service'
import {
  LOGIN_USER_DATA,
  REQUEST,
  REQUEST_WITHOUT_USER,
  USER,
} from '../../static/mockData'

describe('AuthController', () => {
  let controller: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            getByEmail: jest.fn(async () => ({
              ...USER,
              password: await hash(USER.password, await genSalt()),
            })),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => 'token.123'),
          },
        },
      ],
    }).compile()

    controller = module.get(AuthController)
  })

  it('Should create user', () => {
    expect(controller.login(REQUEST)).toEqual(LOGIN_USER_DATA)
  })

  it('createUser should return undefined', () => {
    expect(controller.login(REQUEST_WITHOUT_USER)).toBe(undefined)
  })
})
