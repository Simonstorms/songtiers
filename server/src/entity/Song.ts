import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserSongTier } from "./UserSongTier";

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    artist!:string

    @Column()
    image!:string

    @OneToMany(() => UserSongTier, (userSongTier) => userSongTier.song)
    userSongTier!: UserSongTier[];
}