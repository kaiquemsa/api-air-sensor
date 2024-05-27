import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tbUsers")
export default class Users {
  @PrimaryColumn({ nullable: false }) 
  ID: number;

  @Column()
  username: string;

  @Column()
  password: string;
}