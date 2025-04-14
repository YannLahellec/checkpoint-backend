"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const Country_1 = require("../entities/Country");
(0, dotenv_1.config)();
exports.dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "../../database.sqlite",
    entities: [Country_1.Country],
    synchronize: true,
    logging: true,
});
