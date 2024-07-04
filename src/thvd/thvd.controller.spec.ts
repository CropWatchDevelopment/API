import { Test, TestingModule } from '@nestjs/testing';
import { ThvdController } from './thvd.controller';

describe('ThvdController', () => {
  let controller: ThvdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThvdController],
    }).compile();

    controller = module.get<ThvdController>(ThvdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
