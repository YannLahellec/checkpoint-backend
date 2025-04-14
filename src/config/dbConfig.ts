import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

config();

export const dataSource = new DataSource({
    type: "sqlite",
    database: "../../database.sqlite",
    entities: [Country],
    synchronize: true, 
    logging: true,
})