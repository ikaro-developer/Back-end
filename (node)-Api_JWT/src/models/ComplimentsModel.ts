import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import TagsModel from "./TagsModel.ts";
import UsersModel from "./UsersModel.ts";


@Entity("compliments")
class ComplimentsModel {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @ManyToOne(() => UsersModel)
    @JoinColumn({ name: "user_sender" })
    userSender!: UsersModel;


    @ManyToOne(() => UsersModel)
    @JoinColumn({ name: "user_receiver" })
    userReceiver!: UsersModel;


    @ManyToOne(() => TagsModel)
    @JoinColumn({ name: "tag_id" })
    tag!: TagsModel;


    @Column("varchar")
    message!: string;

    @CreateDateColumn()
    created_at!: Date;

}

export { ComplimentsModel }