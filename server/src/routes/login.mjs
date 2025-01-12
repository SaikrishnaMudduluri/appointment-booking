import { Router } from 'express';
const router = Router();

import generateAccessToken from "../controllers/auth.mjs"

//import models
import User from './../models/user.mjs';

router.get('/', (req, res) => {
    User.find(req.query)
        .then((result) => {
            if (result.length === 0) {
                return res.status(404).send({ error: 'Email or Password not correct please try again' });
            }
            const token = generateAccessToken(result.email);

            const data = {
                "_id": result[0]._id,
                "firstName": result[0].firstName,
                "lastName": result[0].lastName,
                "role": result[0].role,
                "token": token
            }

            console.log(data);
            
            
            res.status(200).send(data);
        })
        .catch((error) => {
            console.error('Error fetching records:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        });

    // res.send('dfgdr')
});

export default router;