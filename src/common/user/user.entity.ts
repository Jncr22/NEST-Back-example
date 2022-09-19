import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 20})
    name:string;

    @Column({length: 20})
    lastname:string;

    @Column({length:100, unique:true})
    @IsNotEmpty()
    @IsEmail()
    mail:string;

    @Column({length:100})
    @IsNotEmpty()
    password:string;

    @Column({type:'boolean' , default:false})
    active:boolean;

    @CreateDateColumn()
    createOn: Date;
}