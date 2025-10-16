import restaurantController from './controllers/restaurant.controller';

import express, { Router } from 'express';
const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome)

/** Restaurant */
routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin)

routerAdmin
.get('/signup', restaurantController.getSignup)
.post('/signup', restaurantController.processSignup)
/** Product */


/** User */
export default routerAdmin ;