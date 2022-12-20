import { UserDto } from 'src/user/dto/user.dto';
import { Status } from '../enum/task.enum';

export class TaskDto {
  id: string;

  description: string;

  status: Status;

  users: UserDto[];
}
