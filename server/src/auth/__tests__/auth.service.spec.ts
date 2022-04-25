import {Test, TestingModule} from '@nestjs/testing'
import {JwtService} from '@nestjs/jwt'
import {genSalt, hash} from 'bcrypt'
import {AuthService} from '../auth.service'
import {UserService} from '../../user/user.service'
import {
  LOGIN_USER_DATA,
  USER,
  USER_WITHOUT_PASSWORD,
} from '../../static/mockData'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get(AuthService)
  })

  it('Should login user', () => {
    expect(service.login(USER)).toEqual(LOGIN_USER_DATA)
  })

  it('Should validate user', async () => {
    expect(await service.validateUser('foo@bar.baz', '123456Aa')).toEqual(
      USER_WITHOUT_PASSWORD,
    )
  })

  it('validateUser should return null', async () => {
    expect(
      await service.validateUser('foo@bar.baz', 'incorrect password'),
    ).toBe(null)
  })
})
