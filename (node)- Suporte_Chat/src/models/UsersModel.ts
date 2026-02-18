import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("users")
class UsersModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  email!: string;

  @CreateDateColumn()
  created_at!: Date;
}
export { UsersModel };
