import { Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(AuthGuard)
    @Get('inventory')
    async getInventory(@Request() req): Promise<any> {
        const user = await this.usersService.findOneWithPoke(req.user.username);
        return user;
    }

    @UseGuards(AuthGuard)
    @Put('inventory')
    async updateInventory(@Request() req): Promise<any> {
        const userPoke = await this.usersService.updateUserPoke(req.body);
        return userPoke;
    }
}
