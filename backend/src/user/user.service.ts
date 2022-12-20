import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //----------------------------------------------------------------------------->
  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user: UserDto = new UserDto();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.confirmationToken = crypto.randomBytes(32).toString('hex');
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserDto.password, user.salt);
    user.status = false;
    try {
      await this.userRepository.save(user);
      delete user.password;
      delete user.salt;
      return user;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('This email address is already in use');
      } else {
        throw new InternalServerErrorException(
          'Error in saving the user in database',
        );
      }
    }
  }

  //----------------------------------------------------------------------------->
  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Impossible to find all users');
    }
  }

  //----------------------------------------------------------------------------->
  async findOneById(id: string): Promise<User> {
    const user = this.userRepository
      .createQueryBuilder('user')
      .select(['user.name', 'user.email', 'user.status'])
      .where('user.id = :id', { id: id })
      .getOne();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  //----------------------------------------------------------------------------->
  async findOneByEmail(email: string): Promise<User> {
    const user = this.userRepository
      .createQueryBuilder('user')
      .select(['user.name', 'user.email', 'user.status'])
      .where('user.email = :email', { email: email })
      .getOne();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  //----------------------------------------------------------------------------->
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (
      user.name === updateUserDto.name &&
      user.email === updateUserDto.email &&
      user.status === updateUserDto.status
    ) {
      return this.findOneById(id);
    }
    user.name = updateUserDto.name ? updateUserDto.name : user.name;
    user.email = updateUserDto.email ? updateUserDto.email : user.email;
    user.status = updateUserDto.status ? updateUserDto.status : user.status;
    user.updateAt = new Date();
    try {
      await this.userRepository.save(user);
      return this.findOneById(id);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error in saving the user in database',
      );
    }
  }

  //----------------------------------------------------------------------------->
  async remove(id: string): Promise<object> {
    // const user = await this.findOneById(id);
    const result = await this.userRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Not found an user with the informed ID');
    }
    return { message: 'The user has been removed from the database' };
  }

  //----------------------------------------------------------------------------->
  async checkCredential(credentialsDto: CredentialsDto): Promise<User> {
    const { email, password } = credentialsDto;
    let user = new User();
    user = await this.userRepository.findOneBy({ email });
    if (user && (await user.checkPassword(password))) {
      return user;
    } else {
      return null;
    }
  }
}
