const express = require('express');
const router = require('./routers/router');
const db = require('./config/database');
const path=require('path');
const b_router = require('./routers/blog_router');
const localAuth = require('./controllers/local-controller');
const passport = require('passport');
const expressSession = require('express-session');
const passportAuth = require('./middlewares/localMiddleware');

localAuth(passport)

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));
app.use(expressSession({secret:"key",resave:false,saveUninitialized:false}));
app.use(passport.initialize())
app.use(passport.session())
app.use(router);
app.use(passportAuth)
app.use("/blog",b_router)

app.listen(8084, (err) => {
    if (!err) {
        db()
        console.log("server start. http://localhost:8084");
    }
});