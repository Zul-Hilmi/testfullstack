import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("success")
})

app.listen(3000,()=>{
    console.log("server")
})