import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReservationTable1699253965270 implements MigrationInterface {
  name = 'CreateReservationTable1699253965270';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reservations" ("id" SERIAL PRIMARY KEY, "phoneNumber" character varying, "createdAt" timestamp NOT NULL, "status" character varying NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "reservations"`);
  }
}
