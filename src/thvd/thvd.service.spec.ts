import { Test, TestingModule } from '@nestjs/testing';
import { ThvdService } from './thvd.service';

describe('ThvdService', () => {
  let service: ThvdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThvdService],
    }).compile();

    service = module.get<ThvdService>(ThvdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
