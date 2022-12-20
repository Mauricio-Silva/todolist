import { IsAlpha, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsAlpha('', { message: 'Inform a valid name' })
  name: string;

  @IsEmail({}, { message: 'Inform a valid email address' })
  email: string;

  @IsString({ message: 'Inform a valid username' })
  password: string;
}
