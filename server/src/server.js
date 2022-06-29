import cookieParser from "cookie-parser";
import express from "express";
import 'dotenv/config'
import routes from "./routes/index.js";
import cors from "cors";


const server = express()

server.use(express.urlencoded({extended:true}))
server.use(express.json())
//Origin and credentials allow to send cookies
server.use(cors({origin:true,credentials:true}))
server.use(cookieParser())

server.use("/",routes)
export default server
