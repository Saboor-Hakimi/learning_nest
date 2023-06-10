import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  bookName: string;

  @Column()
  @IsString()
  authorName: string;

  @Column()
  @IsNumber()
  publishYear: number;

  @Column({ default: true })
  @IsBoolean()
  isAvailable: boolean;
}
