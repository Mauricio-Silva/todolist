import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CredentialsDto } from './../user/dto/credentials.dto';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(userDto: UserDto): Promise<User> {
    if (userDto.password != userDto.confirmationPassword) {
      throw new UnprocessableEntityException("The passwords don't match");
    } else {
      return this.userRepository.create(userDto);
    }
    // return this.userRepository.create(createUserDto);
  }

  async signIn(credentialsDto: CredentialsDto) {
    const user = await this.userService.checkCredential(credentialsDto);
    if (user === null) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const jwtPayload = {
      is: user.id,
    };
    const token = this.jwtService.sign(jwtPayload);
    return { token };
  }
}
