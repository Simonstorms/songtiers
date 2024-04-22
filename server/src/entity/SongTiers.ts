import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SongTiers{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    artist!:string

    @Column()
    image!:string

}