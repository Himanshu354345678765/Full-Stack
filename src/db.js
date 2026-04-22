const path = require("path");
const Datastore = require("nedb-promises");

const dbPath = path.join(__dirname, "..", "database.json");
const db = Datastore.create({
  filename: dbPath,
  autoload: true,
  timestampData: true,
});

db.ensureIndex({ fieldName: "email", unique: true });

module.exports = db;
