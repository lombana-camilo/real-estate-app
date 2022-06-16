import express from "express";
import 'dotenv/config'
import routes from "./routes/index.js";


const server = express()

server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use("/",routes)
export default server
