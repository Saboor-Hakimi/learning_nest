import { IsEmail, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  // auto increment primary column user_id
  @PrimaryColumn({ type: 'int', generated: 'increment' })
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_email: string;
}
