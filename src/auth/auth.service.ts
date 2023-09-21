import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(
    private readonly usersService: UsersService
    ) { }
    
    async login() {
        return {message: 'Login...'};
    }
    async register(registerDto: RegisterDto) {
        const { userName, email } = registerDto;
        const isUser = await this.usersService.findOneByUserName(userName);
        if (!isUser) {
            const isEmail = await this.usersService.findOneByEmail(email);
            
            if (!isEmail) {
                registerDto.password = await bcryptjs.hash(registerDto.password, 10);
                return await this.usersService.create(registerDto);
            }
            throw new BadRequestException('El email ya existe');
            
        }
        throw new BadRequestException('El usuario ya existe');
    }


}
