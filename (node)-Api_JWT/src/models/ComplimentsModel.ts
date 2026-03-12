import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import  TagsModel from "./TagsModel.ts";
import  UsersModel from "./UsersModel.ts";


@Entity("compliments")
class ComplimentsModel {
    @PrimaryColumn("uuid")
    readonly id!: string;

    @Column("uuid")
    user_sender!: string;

    @JoinColumn({ name: "user_sender" })
    userSender!:UsersModel;
    @ManyToOne(() => UsersModel)

    @Column("uuid")
    user_receiver!: string;

    @JoinColumn({ name: "user_receiver" })
    userReceiver!:UsersModel;
    @ManyToOne(() => UsersModel)

    @Column("uuid")
    tag_id!: string;

    @JoinColumn({ name: "tag_id" })
    tag!:TagsModel;
    @ManyToOne(() => TagsModel)

    @Column("varchar")
    message!: string;

    @CreateDateColumn("timestamp")
    created_at!: Date;

}

export { ComplimentsModel }