const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! I am Sugam');
});

app.get('/about', (req, res) => {
    res.send(' This is About Page');
});

const port=1550;

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    
});