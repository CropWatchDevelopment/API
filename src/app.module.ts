import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { PrismaService } from './common/prisma.service';
import { ThvdModule } from './thvd/thvd.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BigIntInterceptor } from './common/interceptors/bigint.interceptor';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DevicesModule,
    ThvdModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntInterceptor,
    },
  ],
})
export class AppModule { }
