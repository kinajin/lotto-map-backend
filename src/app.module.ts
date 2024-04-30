import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { databaseConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LottoStores } from './entity/LottoStores.entity';
import { LottoStoreService } from './lotto-store.service';
import { LottoStoreController } from './lotto-store.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: databaseConfig,
    }),
    TypeOrmModule.forFeature([LottoStores]),
  ],
  controllers: [LottoStoreController],
  providers: [LottoStoreService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private dataSource: DataSource) {}

  onApplicationBootstrap() {
    console.log('🔗 Database connection established 🔗');
  }
}
