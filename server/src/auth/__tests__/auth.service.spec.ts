import {Test, TestingModule} from '@nestjs/testing'
import {AuthService} from '../auth.service'
import {UserService} from '../../user/user.service'
import {LOGIN_USER_DATA, USER} from '../../static/mockData'
import {JwtService} from '@nestjs/jwt'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {}
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => 'token.123'),
          }
        },
      ],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('Should login user', () => {
    expect(service.login(USER)).toEqual(LOGIN_USER_DATA)
  })

  it('Should validate user', () => {

  })
})
