import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(pass, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
        access_token: await this.jwtService.signAsync(result),
    };
  }

  async signUp(username: string, pass: string): Promise<any> {
    const userExists = await this.usersService.findOne(username);
    if (userExists) {
      throw new ConflictException("Username already exists")
    }
    const hash = await bcrypt.hash(pass, 10);
    const user = await this.usersService.create(username, hash);
    const { password, ...result } = user;
    return {user: result};
  }
}
