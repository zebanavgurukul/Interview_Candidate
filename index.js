const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
require('dotenv/config')

const Apis = require("./routes/Apis")
app.use("/Api",Apis)

// start server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
 console.log(`Server Running on port ${PORT}`);
})
