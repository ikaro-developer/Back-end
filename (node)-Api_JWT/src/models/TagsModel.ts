import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("tags")
class TagsModel {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column("varchar")
    name!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}

export default TagsModel;