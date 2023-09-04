import dbConfig from "../config/db.config";
// import tutorials
import {Mongoose} from "mongoose";

const mongoose = new Mongoose();

mongoose.Promise = global.Promise;

const db = {
    mongoose,
    url: dbConfig.url,
    tutorials: 
};

// db.tutorials = require("./tutorial.model.ts")(mongoose);

// module.exports = db;