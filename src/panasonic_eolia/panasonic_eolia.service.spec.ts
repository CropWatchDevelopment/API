import { Test, TestingModule } from '@nestjs/testing';
import { PanasonicEoliaService } from './panasonic_eolia.service';

describe('PanasonicEoliaService', () => {
  let service: PanasonicEoliaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PanasonicEoliaService],
    }).compile();

    service = module.get<PanasonicEoliaService>(PanasonicEoliaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
