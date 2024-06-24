const { Router } = require("express");
const { loginPage, creatPage, creat, logout } = require("../controllers/userControler");
const passport = require("passport");


const router = Router()


router.get('/login', loginPage)
router.post('/login',passport.authenticate("local",{
    failureRedirect:"/login",
    successRedirect:"/blog"
}) )
router.get('/creat', creatPage)
router.post('/creat', creat)
router.get('/logout', logout)



module.exports = router