const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const OperationsRouter = require ('./routes/operations_router');
// require('dotenv').config();

// app.use((req,res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
//     res.setHeader('Access-Control-Allow-Headers',"*");
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/operations', OperationsRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
