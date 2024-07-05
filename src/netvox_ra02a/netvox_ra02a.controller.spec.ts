import { Test, TestingModule } from '@nestjs/testing';
import { NetvoxRa02aController } from './netvox_ra02a.controller';

describe('NetvoxRa02aController', () => {
  let controller: NetvoxRa02aController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetvoxRa02aController],
    }).compile();

    controller = module.get<NetvoxRa02aController>(NetvoxRa02aController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
