import { Test, TestingModule } from '@nestjs/testing';
import { TmepnpkService } from './tmepnpk.service';

describe('TmepnpkService', () => {
  let service: TmepnpkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TmepnpkService],
    }).compile();

    service = module.get<TmepnpkService>(TmepnpkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
