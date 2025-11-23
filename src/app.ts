import express from 'express'
import path from 'path'
import router from '../src/router'
import routerAdmin from './router-admin';
import morgan from 'morgan'
import cookieParser from "cookie-parser"
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import { T } from './libs/types/common';

const MongoDbStore = ConnectMongoDB(session);
const store = new MongoDbStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',
});

//** 1-entrance **//
const app = express();
console.log("__dirname:",__dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use("/upload", express.static("./uploads"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())
app.use(morgan(MORGAN_FORMAT));


//** 2-sessions **//
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000*3600*6 //6h
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(function(req,res,next){
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
})



//** 3-views **//
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");



//** 4-routers **//
app.use('/admin', routerAdmin) // SSR
app.use("/", router); // REACT =>SPA

export default app;