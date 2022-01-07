import {IsEmail, Matches, MinLength} from 'class-validator'
import {PASSWORD_REGEXP} from '../../utils/regexps'

export class CreateUserDto {
  @IsEmail(undefined, {message: 'Incorrect email!'})
  readonly email: string

  readonly fullName: string

  @MinLength(4, {message: 'Password must be at least 6 characters'})
  @Matches(PASSWORD_REGEXP, {
    message:
      'Password should be contain digits, uppercase and lowercase letters',
  })
  readonly password: string
}
