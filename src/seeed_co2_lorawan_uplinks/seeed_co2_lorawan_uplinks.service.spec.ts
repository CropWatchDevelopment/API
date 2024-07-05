import { Test, TestingModule } from '@nestjs/testing';
import { SeeedCo2LorawanUplinksService } from './seeed_co2_lorawan_uplinks.service';

describe('SeeedCo2LorawanUplinksService', () => {
  let service: SeeedCo2LorawanUplinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeeedCo2LorawanUplinksService],
    }).compile();

    service = module.get<SeeedCo2LorawanUplinksService>(SeeedCo2LorawanUplinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
