import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => this.convertBigIntToString(data)),
    );
  }

  private convertBigIntToString(payload: any) {
    if (payload && typeof payload === 'object') {
      for (const key in payload) {
        if (typeof payload[key] === 'bigint') {
          payload[key] = payload[key].toString();
        } else if (typeof payload[key] === 'object') {
          this.convertBigIntToString(payload[key]);
        }
      }
    }
    return payload;
  }
}
