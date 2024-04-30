// winning-info.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LottoStores } from './LottoStores.entity';

@Entity()
export class WinningInfos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  store_id: number;

  @Column()
  draw_no: number;

  @Column()
  rank: number;

  @Column({ length: 10, nullable: true })
  category: string;

  @ManyToOne(() => LottoStores, (lottoStore) => lottoStore.winnings)
  store: LottoStores;
}
