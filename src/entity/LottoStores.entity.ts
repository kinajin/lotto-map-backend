import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { WinningInfos } from './WinningInfos.entity';

@Entity('LottoStores')
export class LottoStores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 30, nullable: true })
  phone: string;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  lat: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  lon: number;

  @Column({ default: 0 })
  first_prize: number;

  @Column({ default: 0 })
  second_prize: number;

  @Column({ default: 0 })
  score: number;

  @OneToMany(() => WinningInfos, (WinningInfos) => WinningInfos.store)
  winnings: WinningInfos[];
}
