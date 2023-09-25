import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';

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

    @Get('profile')
    @Roles(['admin, user'])
    @UseGuards(AuthGuard, RolesGuard)
    profile(@Request() req: RequestWithUser) {
    return req.user;
}

}
