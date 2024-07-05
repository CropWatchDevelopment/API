import { ConfigService } from '@nestjs/config';

export const PanasonicEoliaConfig = {
  provide: 'PANASONIC_EOLIA_CONFIG',
  useFactory: (configService: ConfigService) => ({
    atkn: configService.get<string>('PANASONIC_ATKN'),
    userId: configService.get<string>('PANASONIC_USER_ID'),
    password: configService.get<string>('PANASONIC_PASSWORD'),
    host: configService.get<string>('PANASONIC_HOST'),
    userAgent: configService.get<string>('PANASONIC_USER_AGENT'),
  }),
  inject: [ConfigService],
};