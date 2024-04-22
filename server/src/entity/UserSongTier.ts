import { Column, Entity, JoinTable, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Song } from "./Song";

@Entity()
export class UserSongTier{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    position!: number;

    @Column()
    songId!: number;

    @Column()
    userId!: number;

    @ManyToOne(() => User, (user) => user.userSongTier)
    user!: User;

    @ManyToOne(() => Song, (song)=>song.userSongTier)
    song!: Song;

}