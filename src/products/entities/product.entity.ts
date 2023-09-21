import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column('text')
  image: string;

  @Column()
  stock: number;

  @Column()
  base_price: number;

  @Column()
  sale_price: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
