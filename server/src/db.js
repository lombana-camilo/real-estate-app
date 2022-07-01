import { Sequelize,Op } from "sequelize";
import 'dotenv/config'
import ModelProperty from "./models/Property.js"
import ModelUser from "./models/User.js"

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env;

//Settings of sequelize for Heroku Deploy
let db =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

// const db = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
//    logging:false
// });

//Inyecting Sequelize connection to models
ModelProperty(db)
ModelUser(db)

//Relations
const { Property, User } = db.models
User.hasMany(Property)
Property.belongsTo(User)
export {db,Op};
