import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  SerializeOptions,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReservationsService } from './reservations.service';
import { ReservationDto } from './dto/reservations.dto';

@ApiTags('Reservations')
@Controller({
  path: 'reservations',
  version: '1',
})
export class ReservationsController {
  constructor(private readonly service: ReservationsService) {}
  @SerializeOptions({
    groups: ['me'],
  })
  @Post('create')
  @HttpCode(HttpStatus.OK)
  public create(@Body() createReservationDto: ReservationDto): Promise<void> {
    return this.service.create(createReservationDto);
  }
}
