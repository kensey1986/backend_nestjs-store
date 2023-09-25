import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request {
    user: {
        id: string;
        userName: string;
        role: string;
    };
}


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto
    ) {

        return this.authService.register(registerDto);
    }
    @Post('login')
    login(
        @Body()
        loginDto: LoginDto
    ) {
        return this.authService.login(loginDto);
    }

    // @Get('profile')
    // @Roles([Role.ADMIN, Role.USER])
    // @UseGuards(AuthGuard, RolesGuard)
    // profile(@Request() req: RequestWithUser) {
    // return req.user;
    // }

    @Get('profile')
    @Auth(Role.ADMIN, Role.USER)
    profile(@Request() req: RequestWithUser) {
    return req.user;
    }

}
