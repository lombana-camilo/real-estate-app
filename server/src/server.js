import cookieParser from "cookie-parser";
import express from "express";
import 'dotenv/config'
import routes from "./routes/index.js";
import cors from "cors";
const server = express()

const allowCORS = function(req, res, next) {
   var origin = req.get('origin');
   console.log({origin})
   res.header("Access-Control-Allow-Origin", origin);
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   next();
};

server.use(allowCORS)
server.use(express.urlencoded({extended:true}))
server.use(express.json())
// server.use(cors({origin:"https://real-estate-app-kappa-three.vercel.app/",credentials:true}))

server.use(cookieParser())

server.use("/",routes)
export default server
