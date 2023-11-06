import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate, IsPhoneNumber } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class ReservationDto {
  @ApiProperty({ example: '+8613319611793' })
  @Validate(IsNotExist, ['Reservations'], {
    message: 'phoneNumberNotExists',
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  phoneNumber: string;
}
