import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class Blog{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 150})
    title:string;

    @Column('text')
    decription:string;

    @Column('int')
    like:number;

    @Column('int')
    dislike:number;

    @Column({type:'boolean' , default:false})
    active:boolean;

    @CreateDateColumn()
    createOn: Date;

}