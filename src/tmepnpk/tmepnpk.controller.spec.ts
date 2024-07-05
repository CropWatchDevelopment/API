import { Test, TestingModule } from '@nestjs/testing';
import { TmepnpkController } from './tmepnpk.controller';

describe('TmepnpkController', () => {
  let controller: TmepnpkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TmepnpkController],
    }).compile();

    controller = module.get<TmepnpkController>(TmepnpkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
