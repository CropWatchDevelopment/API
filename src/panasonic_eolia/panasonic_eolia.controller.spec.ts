import { Test, TestingModule } from '@nestjs/testing';
import { PanasonicEoliaController } from './panasonic_eolia.controller';

describe('PanasonicEoliaController', () => {
  let controller: PanasonicEoliaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PanasonicEoliaController],
    }).compile();

    controller = module.get<PanasonicEoliaController>(PanasonicEoliaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
