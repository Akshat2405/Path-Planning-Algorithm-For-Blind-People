const express = require('express');
const app = express();
const path = require('path');

const port=process.env.PORT || 3000;
const staticpath=path.join(__dirname,"/public");
app.use(express.static(staticpath));





app.get("/comparison",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/comparison.html'));
})
app.get("/dijk",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/dijk.html'));
})
app.get("/opti",(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/opti.html'));
})


app.listen(port);

console.log('Running at Port 3000');