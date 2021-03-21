import { BaseQueryParametersDto } from "src/shared/dto/base-query-parameters.dto";
import { ApiProperty } from '@nestjs/swagger';

export class FindUsersQueryDto extends BaseQueryParametersDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    role: string;
  }