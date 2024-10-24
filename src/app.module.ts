import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DeviceModule } from './device/device.module';
import { DataModule } from './data/data.module';
import { LocationModule } from './location/location.module';
import { SupabaseService } from './supabase/supabase.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      isGlobal: true,
    }),
    DeviceModule,
    DataModule,
    LocationModule,
    SupabaseModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule { }
