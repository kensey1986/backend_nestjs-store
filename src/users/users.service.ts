import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(registerDto: RegisterDto) {
    return await this.userRepository.save(registerDto);
  }

  async findOneByUserName(userName: string) {
    return await this.userRepository.findOne({ where: { userName: userName } });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  } 

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
