import express from "express";
import 'dotenv/config'
const server = express()

server.get("/",(req,res)=>{
   res.send("hello")
})

export default server
