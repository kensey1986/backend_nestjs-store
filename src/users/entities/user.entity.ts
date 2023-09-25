import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firtsName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column( {default: ['user']})
  role: string;

  @Column('text')
  image: string;

  @Column({ unique: true})
  email: string;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
