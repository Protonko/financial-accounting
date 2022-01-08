import {CreateUserDto} from '../user/dto/create-user.dto'
import {User} from '../user/entities/user.entity'
import {UserWithoutPassword} from '../model/UserWithoutPassword'
import {LoginUserData} from '../model/LoginUserData'

export const CREATE_USER_DTO: CreateUserDto = {
  email: 'foo@bar.baz',
  fullName: 'Foo Bar Baz',
  password: '123456Aa',
}

export const USER_WITHOUT_PASSWORD: UserWithoutPassword = {
  email: 'foo@bar.baz',
  fullName: 'Foo Bar Baz',
  id: 1,
}

export const USER: User = {
  email: 'foo@bar.baz',
  fullName: 'Foo Bar Baz',
  id: 1,
  password: '123456Aa',
}

export const LOGIN_USER_DATA: LoginUserData = {
  access_token: 'token.123',
  email: 'foo@bar.baz',
  fullName: 'Foo Bar Baz',
  id: 1,
}
