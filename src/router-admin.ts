import productController from './controllers/product.controller';
import restaurantController from './controllers/restaurant.controller';

import express from 'express';
import makeUploader  from './libs/utils/uploader';
const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome)

/** Restaurant */
routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin)

routerAdmin
.get('/signup', restaurantController.getSignup)
.post('/signup', 
makeUploader("members").single("memberImage"),      
restaurantController.processSignup)

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthsession);

/** Product */
routerAdmin.get(
"/product/all", 
restaurantController.verifyRestaurant,    
productController.getAllProducts
);

routerAdmin.post(
"/product/create", 
restaurantController.verifyRestaurant,
// makeUploader.single('productImage') , 
makeUploader("products").array("productImages",5),   
productController.createNewProduct )

routerAdmin.post(
"/product/:id", 
restaurantController.verifyRestaurant,     
productController.updateChosenProduct )
/** User */
routerAdmin.get("/user",restaurantController.verifyRestaurant, restaurantController.getUsers)

export default routerAdmin ;