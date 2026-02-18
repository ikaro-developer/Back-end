import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UsersModel } from "./UsersModel.ts";
@Entity("messages")
class MessageModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("uuid", { nullable: true })
  admin_id?: string;

  @Column("varchar")
  text!: string;

  @Column("uuid")
  user_id!: string;

  @ManyToOne(() => UsersModel)
  @JoinColumn({ name: "user_id" })
  user!: UsersModel;

  @CreateDateColumn()
  created_at!: Date;
}
export { MessageModel };
