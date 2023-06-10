import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  user_name: string;

  @IsEmail()
  user_email: string;
}
