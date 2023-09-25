import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/rol.enum';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector,
  ) {}
  
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const ROLES_KEY = 'roles';
    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [ context.getHandler(), context.getClass() ]);
    if (!roles) {
      return true;
    }
    const {user} = context.switchToHttp().getRequest();
  
    return roles.includes(user.role);
  }
}