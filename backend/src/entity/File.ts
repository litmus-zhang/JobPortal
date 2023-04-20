import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Applicant } from './Applicant';

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column('bytea')
    data: string;

    // @OneToOne(() => Applicant, (applicant) => applicant.file)
    // applicant: Applicant;

}
