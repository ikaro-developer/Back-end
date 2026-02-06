import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("users")
class UserModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  name!: string;

  @Column("varchar")
  email!: string;

  @CreateDateColumn()
  created_at!: Date;
}
export { UserModel };
