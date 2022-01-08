import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {hash, genSalt} from 'bcrypt'
import {CreateUserDto} from './dto/create-user.dto'
import {User} from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await genSalt()
    const hashedPassword = await hash(createUserDto.password, salt)
    const {password, ...user} = await this.userRepository.save({...createUserDto, password: hashedPassword})

    return user
  }

  async getById(id: number) {
    return this.userRepository.findOne(id)
  }

  async getByEmail(email: string) {
    return this.userRepository.findOne({email})
  }
}
