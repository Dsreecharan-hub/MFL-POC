import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const databaseDirectory = path.join(process.cwd(), "database");

if (!fs.existsSync(databaseDirectory)) {
    fs.mkdirSync(databaseDirectory, { recursive: true });
}

const databasePath = path.join(databaseDirectory, "mfl-poc.db");

const db = new Database(databasePath);

db.pragma("foreign_keys = ON");

export default db;