import {Injectable} from '@nestjs/common'
import {CreateUserDto} from './dto/create-user.dto'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {User} from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto)
  }

  async getById(id: number) {
    return this.userRepository.findOne(id)
  }

  async getByEmailAndPassword(email: string, password: string) {
    return this.userRepository.findOne({email, password})
  }
}
