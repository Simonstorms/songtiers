import {
    Entity,
    PrimaryGeneratedColumn,
    Column, OneToMany

} from "typeorm";
import { UserSongTier } from "./UserSongTier";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;


    @OneToMany(() => UserSongTier, (userSongTier) => userSongTier.user)
    userSongTier!: UserSongTier[];

}