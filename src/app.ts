import express from 'express'
import path from 'path'
import router from '../src/router'

//** 1-entrance **//
const app = express();
console.log("__dirname:",__dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//** 2-sessions **//
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

//** 3-views **//

//** 4-routers **//
app.use('/', router)

export default app;