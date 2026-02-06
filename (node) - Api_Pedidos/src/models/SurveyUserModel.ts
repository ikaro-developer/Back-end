import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserModel } from "./UserModel.ts";
import { SurveyModel } from "./SurveyModel.ts";

@Entity("surveys_users")
class SurveyUserModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("uuid")
  user_id!: string;

  @ManyToOne(() => UserModel)
  @JoinColumn({ name: "user_id" })
  user!: UserModel;

  @Column("uuid")
  survey_id!: string;

  @ManyToOne(() => SurveyModel)
  @JoinColumn({ name: "survey_id" })
  survey!: SurveyModel;

  @Column("integer", { nullable: true })
  value?: number;

  @CreateDateColumn()
  created_at!: Date;
}

export { SurveyUserModel };
