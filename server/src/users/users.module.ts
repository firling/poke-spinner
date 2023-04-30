import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPoke } from 'src/entities/userPoke.entity';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserPoke]),
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: process.env.AUTH_SECRET,
        signOptions: { expiresIn: '30d' },
      }),
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
