import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservations } from './entities/reservation.entity';
import { ReservationDto } from './dto/reservations.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservations)
    private reservationRepository: Repository<Reservations>,
  ) {}

  async create(data: ReservationDto): Promise<void> {
    const res = this.reservationRepository.create(data);
    await this.reservationRepository.save(res);
  }
}
