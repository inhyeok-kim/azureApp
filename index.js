const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hihihihi');
});

app.listen(process.env.PORT, ()=>{
    console.log('start');
});