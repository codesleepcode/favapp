const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send("<html><h1>welcome to my app</h1></html>");
})

app.listen(80, ()=>{
    console.log(`listening....`);
})

