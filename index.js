const express = require('express');
const app = express();
const {json} = require('express');
const user = require("./router/userRoutes");

const port = process.env.PORT || 3700; 

app.use(json());
app.use('/', user);


app.listen(port, () => {
    console.log(`Server Runing at ${port}`);
});
