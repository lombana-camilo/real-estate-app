import { Sequelize,Op } from "sequelize";
import 'dotenv/config'
import ModelProperty from "./models/Property.js"
import ModelUser from "./models/User.js"

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env;

const db = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
   logging:false
});
//Inyecting Sequelize connection to models
ModelProperty(db)
ModelUser(db)

//Relations
const { Property, User } = db.models
User.hasMany(Property)
Property.belongsTo(User)
export {db,Op};
