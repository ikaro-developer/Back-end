import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersModel } from "./UsersModel.ts";
@Entity("connections")
class ConnectionModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("uuid", { nullable: true })
  admin_id?: string;

  @Column("varchar")
  socket_id!: string;

  @Column("uuid")
  user_id!: string;

  @ManyToOne(() => UsersModel)
  @JoinColumn({ name: "user_id" })
  user!: UsersModel;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
export { ConnectionModel };
