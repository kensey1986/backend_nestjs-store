import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ) { }
    
    async login(LoginDto: LoginDto) {
        const { userName, password } = LoginDto;
        const user = await this.usersService.findOneByUserName(userName);
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password);
            if (isMatch) {
                const { userName, id} = user;
                const payload = { userName, sub: id };
                const token = await this.jwtService.signAsync(payload);
                return {token, userName};
            }
        }
        throw new UnauthorizedException('Usuario y/o contraseña incorrecta');
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
