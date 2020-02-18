const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
app.use('/',routes);
app.listen(9000,()=>{console.log("Health incentive application on ethereum blockchain is running on port 9000")});