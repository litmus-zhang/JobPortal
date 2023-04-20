import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Applicant } from "./Applicant";

@Entity()
export class Job {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column()
    salary?: number;

    // @OneToMany(() => Applicant, (applicant) => applicant.job )
    // @Column()
    // applicants: Applicant[];

}