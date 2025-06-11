import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.use(express.json());

app.post('/api/v1/message',(req,res)=>{
    const message = req.body.message;
    res.json({message});
})
app.get('/api/v1/message',(req,res)=>{
    // const message = req.body.message;
    res.json("hello");
})

app.get('/',(req,res) => {
    res.json("welcome")
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})