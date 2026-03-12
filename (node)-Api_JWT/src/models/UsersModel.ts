
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
export class UsersModel {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column("varchar")
    name!: string;

    @Column({ type: "varchar", unique: true })
    email!: string;
    
    @Column("varchar")
    password!: string;

    @Column({ type: "boolean", default: false })
    admin!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}

export default UsersModel;