import "reflect-metadata"
import { DataSource } from "typeorm"
import { Job } from "./entity/Job"
import { Applicant } from "./entity/Applicant"
import { File } from "./entity/File"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5000,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Job, Applicant, File],
    migrations: [],
    subscribers: [],
})
