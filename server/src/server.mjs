import express from "express";
import mongoose from 'mongoose'
import cors from "cors";
import bodyParser  from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());


import authenticateToken from "./controllers/auth.mjs"

//import routes
import login from './routes/login.mjs'; 
import user from './routes/user.mjs'


//model imports
import User from './models/user.mjs'





app.use('/api/login', login);
app.use('/api/user', authenticateToken, user)


mongoose.connect(process.env.DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to DB'))
    .catch((error) => console.log(error))





const port = process.env.PORT
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})