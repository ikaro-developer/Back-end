import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("surveys_users")
class SurveyUserModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  user_id!: string;

  @Column("varchar")
  survey_id!: string;

  @Column("number")
  value!: number;

  @CreateDateColumn()
  created_at!: Date;
}
export { SurveyUserModel };
