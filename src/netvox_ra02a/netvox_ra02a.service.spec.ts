import { Test, TestingModule } from '@nestjs/testing';
import { NetvoxRa02aService } from './netvox_ra02a.service';

describe('NetvoxRa02aService', () => {
  let service: NetvoxRa02aService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetvoxRa02aService],
    }).compile();

    service = module.get<NetvoxRa02aService>(NetvoxRa02aService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
