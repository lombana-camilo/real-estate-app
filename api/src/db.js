import { Sequelize } from "sequelize";
import 'dotenv/config'
import Property from "./models/Property.js"

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env;

const db = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
   logging:false
});

Property(db)
// db.authenticate()
// .then(()=>console.log("Connected to database"))
// .catch(error=> console.log(error))

export default db
