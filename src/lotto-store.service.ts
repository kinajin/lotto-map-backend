import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LottoStores } from './entity/LottoStores.entity';

@Injectable()
export class LottoStoreService {
  constructor(
    @InjectRepository(LottoStores)
    private lottoStoreRepository: Repository<LottoStores>,
  ) {}

  async getAllStores(): Promise<LottoStores[]> {
    const stores = await this.lottoStoreRepository.find();
    return stores;
  }

  getStoresByCoordinates(
    northEastLat: number,
    northEastLon: number,
    southWestLat: number,
    southWestLon: number,
  ): Promise<LottoStores[]> {
    return this.lottoStoreRepository
      .createQueryBuilder('store')
      .where('store.lat BETWEEN :southWestLat AND :northEastLat', {
        southWestLat,
        northEastLat,
      })
      .andWhere('store.lon BETWEEN :southWestLon AND :northEastLon', {
        southWestLon,
        northEastLon,
      })
      .orderBy('store.score', 'DESC')
      .limit(30)
      .getMany();
  }
}
