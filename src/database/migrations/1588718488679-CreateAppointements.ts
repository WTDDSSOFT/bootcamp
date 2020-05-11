import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointements1588718488679
  implements MigrationInterface {
  /** o que a migration ira fazer */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        /** pssando  */
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_id',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_id',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  /** metodo  que defaz o que foi feito no up */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}

/**
 * migrations
 * controlam a versões do db e controlam  alterações simultaneas dentro do db
 * contem as instruções do que sera feito do db.
 * evitar os db ficarem em versões diferentes no projeto
 */
