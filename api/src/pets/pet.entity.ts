import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../users/entities/user.entity";

@Entity()
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number

    @Column()
    @Field()
    name: string

    @Column({nullable: true})
    @Field({nullable: true})
    type?: string

    @Column()
    @Field(type => Int)
    ownerId: number

    @ManyToOne(()=> User, (user: User) => user.pets)
    @Field({type: () => User})
    owner: User

}