import {JwtStrategy} from '../strategies/jwt.strategy'
import {Test, TestingModule} from '@nestjs/testing'
import {UserService} from '../../user/user.service'
import {JWT_PAYLOAD, USER} from '../../static/mockData'

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        {
          provide: UserService,
          useValue: {
            getById: jest.fn(async () => USER)
          }
        },
      ],
    }).compile()

    jwtStrategy = module.get(JwtStrategy)
  })

  it('Should validate', async () => {
    expect(await jwtStrategy.validate(JWT_PAYLOAD)).toEqual({id: JWT_PAYLOAD.sub, email: JWT_PAYLOAD.email})
  })
})
