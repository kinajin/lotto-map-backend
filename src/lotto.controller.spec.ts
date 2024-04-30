import { Test, TestingModule } from '@nestjs/testing';
import { LottoStoreController } from './lotto-store.controller';
import { LottoStoreService } from './lotto-store.service';

describe('LottoStoreController', () => {
  let controller: LottoStoreController;
  let service: LottoStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LottoStoreController],
      providers: [
        {
          provide: LottoStoreService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              /* mock data */
            ]),
            findByCoordinates: jest.fn().mockResolvedValue([
              /* mock data */
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<LottoStoreController>(LottoStoreController);
    service = module.get<LottoStoreService>(LottoStoreService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllStores', () => {
    it('should return an array of lotto stores', async () => {
      const result = [
        /* mock data */
      ];
      jest.spyOn(service, 'getAllStores').mockResolvedValue(result);

      expect(await controller.getAllStores()).toBe(result);
    });
  });

  describe('getStoresByCoordinates', () => {
    it('should return an array of lotto stores within the given coordinates', async () => {
      const result = [
        /* mock data */
      ];
      jest.spyOn(service, 'getStoresByCoordinates').mockResolvedValue(result);

      expect(await controller.getStoresByCoordinates(0, 0, 0, 0)).toBe(result);
    });
  });
});
