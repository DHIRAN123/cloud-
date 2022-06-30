import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Provider extends BaseEntity {

    @PrimaryColumn()
    providerid! : number;

    @Column()
    providername! : string;

}