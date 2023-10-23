import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';

export class AuthPhoneLoginDto {
  @ApiProperty({ example: '+8618442516896' })
  @Validate(IsExist, ['User'], {
    message: 'phoneNumberNotExists',
  })
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
