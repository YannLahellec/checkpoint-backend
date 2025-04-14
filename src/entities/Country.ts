import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  emoji!: string;

  @Field({nullable: true})
  @Column({nullable: true})
  continent?: string;
}
