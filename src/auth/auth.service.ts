import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    async login() {
        console.log('Login');
        return {message: 'Login...'};
    }
    async register() {
        throw new Error('Method not implemented.');
    }


}
