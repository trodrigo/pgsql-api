import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from './users-roles.enum';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    @Role(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    async createAdminUser(
        @Body(ValidationPipe) createUserDto: CreateUserDto,
    ): Promise<ReturnUserDto> {
        const user = await this.usersService.createAdminUser(createUserDto);
        return {
            user,
            message: 'Administrador cadastrado com sucesso',
        };
    }
}
