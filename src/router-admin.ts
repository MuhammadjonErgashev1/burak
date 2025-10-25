import productController from './controllers/product.controller';
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
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthsession);

/** Product */
routerAdmin.get(
"/product/all", 
restaurantController.verifyRestaurant,    
productController.getAllProducts
);

routerAdmin.post(
"product/create", 
restaurantController.verifyRestaurant,     
productController.createNewProduct )

routerAdmin.post(
"product/:id", 
restaurantController.verifyRestaurant,     
productController.updateChosenProduct )
/** User */
export default routerAdmin ;