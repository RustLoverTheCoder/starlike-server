import { ApiProperty } from '@nestjs/swagger';
import {
  IsPhoneNumber,
  IsNotEmpty,
  MinLength,
  Validate,
} from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class AuthRegisterLoginPhoneDto {
  @ApiProperty({ example: '+8618494933897' })
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists',
  })
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @Validate(IsNotExist, ['User'], {
    message: 'usernameAlreadyExists',
  })
  username: string;
}
