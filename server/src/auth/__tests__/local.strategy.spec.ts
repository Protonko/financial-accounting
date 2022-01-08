import {Test, TestingModule} from '@nestjs/testing'
import {LocalStrategy} from '../strategies/local.strategy'
import {USER_WITHOUT_PASSWORD} from '../../static/mockData'
import {AuthService} from '../auth.service'

describe('LocalStrategy', () => {
  let localStrategy: LocalStrategy

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocalStrategy,
        {
          provide: AuthService,
          useValue: {
            validateUser: jest.fn(async () => USER_WITHOUT_PASSWORD)
          }
        },
      ],
    }).compile()

    localStrategy = module.get(LocalStrategy)
  })

  it('Should validate', async () => {
    expect(await localStrategy.validate('foo@bar.baz', '123456Aa')).toEqual(USER_WITHOUT_PASSWORD)
  })
})
