import { User } from '../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ReturnUserDto {
  @ApiProperty()
  user: User;
  @ApiProperty()
  message: string;
}