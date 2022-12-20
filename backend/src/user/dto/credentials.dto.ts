import { IsEmail, IsString } from 'class-validator';

export class CredentialsDto {
  @IsEmail({}, { message: 'Inform a valid email address' })
  email: string;

  @IsString({ message: 'Inform a valid username' })
  password: string;

  @IsString({ message: 'Inform a valid username' })
  confirmationPassword: string;
}
