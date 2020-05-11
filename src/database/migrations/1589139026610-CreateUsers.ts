import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1589139026610 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        /** pssando  */
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
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
    await queryRunner.dropTable('users');
  }
}
