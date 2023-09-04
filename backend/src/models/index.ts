import dbConfig from "../config/db.config";

import {Mongoose} from "mongoose";

const mongoose = new Mongoose();

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.ts")(mongoose);

module.exports = db;