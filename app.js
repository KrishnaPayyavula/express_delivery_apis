const express  =require("express");
const {logger}  = require("./utilities/applogger.js");
let {data} = require("./mocker/mockData.js");
let {idGenerator} = require("./utilities/utility.js");
const app = express();

const PORT = process.env.PORT || 3000;


// To parse the JSON Data which is coming from HTTP Requests
app.use(express.json());

// To Paser URL Encoded Bodies and add them to the request body.
app.use(express.urlencoded({extended:true}));


app.get("/", (req,res)=>{
    console.log(`Request Details ${req.url}`);
    res.status(200).send({
        status:"200",
        message:"Your first hello world request has succeeded"
    })
})

app.get("/users", (req,res)=>{
    console.log("User Details", data);
    res.status(200).send(data)
})

app.post('/users/:userID',async (req,res)=>{
    logger.info(req.params.userID)
    let {user,age,location} = req.body;
    let id = idGenerator(12);
    await data.push({user,age,location,id});
    res.status(201).send({
        status:"200",
        message:"User Created",
        users:data
    })
})


app.listen(PORT,(error)=>{
    if(error) console.log;
    logger.info(`Server started running on port number ${PORT}`)
})



