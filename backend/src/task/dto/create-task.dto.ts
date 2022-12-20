import { IsString } from 'class-validator';
export class CreateTaskDto {
  @IsString({ message: 'Inform a valid description' })
  description: string;
}
