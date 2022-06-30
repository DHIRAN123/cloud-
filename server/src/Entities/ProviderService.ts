import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class ProviderServices extends BaseEntity{

    @PrimaryColumn()
    serviceid! : number;

    @Column()
    providerid! : number;

    @Column()
    cost! : string;

    @Column()
    description! : string;

    @Column()
    service! : string;

    @Column()
    service_type! : string;
}