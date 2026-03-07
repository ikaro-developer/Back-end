import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity("settings")
class SettingsModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  username!: string;

  @Column("boolean")
  chat!: boolean;

  @UpdateDateColumn()
  updated_at!: Date;

  @CreateDateColumn()
  created_at!: Date;
}
export { SettingsModel };
