import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('CropWatch API')
  .setDescription('API documentation for CropWatch services, offering endpoints for authentication, data management, and monitoring capabilities.')
  .setVersion('1.0')
  .addServer('http://localhost:3000', 'Local Development Server')
  .addServer('https://api.cropwatch.com', 'Production Server')
  .setContact('Kevin Cantrell', 'https://cropwatch.com', 'kevin@cropwatch.com')
  .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
  .addTag('auth', 'Endpoints related to user authentication and authorization')
  .addTag('devices', 'Endpoints for device data management')
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'XYZ')
  .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' }, 'API_KEY')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document, {
  customCssUrl: 'https://example.com/swagger-custom.css',
  customfavIcon: 'https://example.com/favicon.ico',
  customSiteTitle: 'CropWatch API Documentation'
});


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
