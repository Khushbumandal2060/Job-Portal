import express from "express";
import cookieParser from "cookie-Parser";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const 

const PORT = 3000;

app.listen(PORT,()=>{
    console.log('server running at port ${PORT}');
})