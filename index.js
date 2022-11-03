const express = require('express');
const app = express();

const user = require("./router/userRoutes");

const port = process.env.PORT || 3700; 

app.use('/user', user);

// calling the routes
app.get('/', (req, res)=>{
    res.send('hello');
});

app.get('/books', (req, res)=>{
    res.send('No book oh');
});

app.post('/', (req, res)=>{
    res.send('Omo Post of');
});

app.listen(port, () => {
    console.log(`Server Runing at ${port}`);
});
