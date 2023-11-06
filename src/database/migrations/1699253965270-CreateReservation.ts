import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReservationTable1699253965270 implements MigrationInterface {
  name = 'CreateReservationTable1699253965270';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reservations" ("id" SERIAL PRIMARY KEY, "phoneNumber" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "reservations"`);
  }
}
