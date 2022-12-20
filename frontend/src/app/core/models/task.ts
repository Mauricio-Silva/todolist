import { UserDto } from "./user";

export class TaskDto {
  id!: string;
  description!: string;
  status!: string;
  users!: UserDto[];
}

export class CreateTaskDto {
  description!: string;
}

export class UpdateTaskDto {
  description!: string;
  status!: string;
}