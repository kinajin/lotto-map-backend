import { Controller, Get, Query } from '@nestjs/common';
import { LottoStoreService } from './lotto-store.service';

@Controller('lotto-stores')
export class LottoStoreController {
  constructor(private readonly lottoStoreService: LottoStoreService) {}

  @Get()
  async getAllStores() {
    const stores = await this.lottoStoreService.getAllStores();
    return stores;
  }

  @Get('by-coordinates')
  getStoresByCoordinates(
    @Query('northEastLat') northEastLat: number,
    @Query('northEastLon') northEastLon: number,
    @Query('southWestLat') southWestLat: number,
    @Query('southWestLon') southWestLon: number,
  ) {
    return this.lottoStoreService.getStoresByCoordinates(
      northEastLat,
      northEastLon,
      southWestLat,
      southWestLon,
    );
  }
}
