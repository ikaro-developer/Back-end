import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CreateTags1773067684083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "id",
                        type: "uuid",

                    }, {
                        name: "name",
                        type: "varchar",
                    }, {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }, {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }
            )

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags")
    }

}
