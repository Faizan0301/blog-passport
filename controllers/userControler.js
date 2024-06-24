const userDB = require("../models/user.schema");


const creatPage = (req, res) => {
    return res.render('creat')
}
const creat = async (req, res) => {
    const { username, email, password, phone } = req.body
    try {
        await userDB.create({ username, email, password, phone })
        return res.redirect('/login')
    } catch (err) {
        console.log(err);
    }

};
const loginPage = (req, res) => {
    return res.render('login')
}
const logout = async (req, res) => {
    req.logout(()=>{
        return res.redirect('/login')
    })
}

module.exports = {loginPage,creat,creatPage,logout};