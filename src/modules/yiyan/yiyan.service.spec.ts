import { Test, TestingModule } from '@nestjs/testing';
import { YiYanService } from './yiyan.service';

describe('YiYanService', () => {
  let service: YiYanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YiYanService],
    }).compile();

    service = module.get<YiYanService>(YiYanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
