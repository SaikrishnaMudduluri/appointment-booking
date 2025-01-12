import { Router } from 'express';
const router = Router();

//import models
import User from './../models/user.mjs';

router.get('/', (req, res) => {
    User.find(req.query)
    .then((result) => {
        res.send(result)
    })
    .catch((error)=> res.send(error) )
})

export default router