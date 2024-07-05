import { Test, TestingModule } from '@nestjs/testing';
import { SeeedT1000Controller } from './seeed_t1000.controller';

describe('SeeedT1000Controller', () => {
  let controller: SeeedT1000Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeeedT1000Controller],
    }).compile();

    controller = module.get<SeeedT1000Controller>(SeeedT1000Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
