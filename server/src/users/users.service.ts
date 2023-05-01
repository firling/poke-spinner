import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserPoke } from 'src/entities/userPoke.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserPoke)
    private userPokesRepository: Repository<UserPoke>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username })
  }

  async findOneWithPoke(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ['userPokes', 'userPokes.poke'],
    })
  }

  async create(username: string, password: string): Promise<User> {
    const user = new User();
    user.username = username;
    user.password = password;
    return this.usersRepository.save(user);
  }

  async updateUserPoke(userPokes: UserPoke[]): Promise<void> {
    userPokes.forEach(async (userPoke) => {
      await this.userPokesRepository.save(userPoke);
    });
  }
}
