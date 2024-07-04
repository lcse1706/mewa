import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

export class ApiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Authorization');
    console.log({ authHeader });
    return authHeader === process.env.API_KEY;
  }
}
