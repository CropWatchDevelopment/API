import { Test, TestingModule } from '@nestjs/testing';
import { SeeedCo2LorawanUplinksController } from './seeed_co2_lorawan_uplinks.controller';

describe('SeeedCo2LorawanUplinksController', () => {
  let controller: SeeedCo2LorawanUplinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeeedCo2LorawanUplinksController],
    }).compile();

    controller = module.get<SeeedCo2LorawanUplinksController>(SeeedCo2LorawanUplinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
