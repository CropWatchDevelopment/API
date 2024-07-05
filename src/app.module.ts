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
import { TmepnpkModule } from './tmepnpk/tmepnpk.module';
import { SeeedT1000Module } from './seeed_t1000/seeed_t1000.module';
import { SeeedSensecapS2120Module } from './seeed_sensecap_s2120/seeed_sensecap_s2120.module';
import { SeeedCo2LorawanUplinksModule } from './seeed_co2_lorawan_uplinks/seeed_co2_lorawan_uplinks.module';
import { NetvoxRa02aModule } from './netvox_ra02a/netvox_ra02a.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DevicesModule,
    ThvdModule,
    TmepnpkModule,
    SeeedT1000Module,
    SeeedSensecapS2120Module,
    SeeedCo2LorawanUplinksModule,
    NetvoxRa02aModule
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
