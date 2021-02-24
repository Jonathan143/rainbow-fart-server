import { Test, TestingModule } from '@nestjs/testing';
import { YiyanService } from './yiyan.service';

describe('YiyanService', () => {
  let service: YiyanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YiyanService],
    }).compile();

    service = module.get<YiyanService>(YiyanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
