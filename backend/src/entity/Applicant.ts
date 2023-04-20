import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { File } from "./File";
import { Job } from "./Job";


@Entity()

export class Applicant {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    // @OneToOne(() => File)
    // @Column()
    // file: File;

    // @ManyToOne(() => Job, (job) => job.applicants)
    // @Column()
    // job: Job;
}