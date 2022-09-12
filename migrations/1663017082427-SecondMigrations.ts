import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigrations1663017082427 implements MigrationInterface {
    name = 'SecondMigrations1663017082427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`contact_number\` bigint NOT NULL, \`photo\` blob NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
