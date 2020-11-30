const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + "/public/"));

app.get("/welcome",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/welcome.html'));
})

app.get("/algo",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
})


app.listen(process.env.port || 3000);

console.log('Running at Port 3000');