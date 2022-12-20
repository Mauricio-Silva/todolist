import { TaskDto } from "./task";

export class UserDto {
  id!: string;
  name!: string;
  email!: string;
  status!: boolean;
  password!: string;
  confirmationPassword!: string;
  confirmationToken!: string;
  salt!: string;
  createAt!: Date;
  updateAt!: Date;
  task!: TaskDto;
}

export class CreateUserDto {
    name!: string;
    email!: string;
    password!: string;
}

export class UpdateUserDto {
    name!: string;
    email!: string;
    status!: boolean;
}