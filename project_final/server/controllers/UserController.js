const passport = require("passport")
const { User, Book } = require("../models")
const bcrypt = require('bcrypt');

class UserController {
    static async addUser(req, res) {
        let user = await User.findOne({ where: { login: req.body.data.login } })

        if (!user) {
            req.body.data.password = await bcrypt.hash(req.body.data.password, 10)
            let result = await User.create({ ...req.body.data })
            res.send({ status: "OK" })
        } else {
            res.send({ error: "User already exists!" })
        }
    }

    static async GetUser(req, res) {
        res.send({ user: req.user })
    }

    static async checkIsAdmin(req, res) {
        if (req.user && req.user.type == 1) {
            res.send({ user: req.user })
        } else {
            res.send({ error: "no user" })
        }
    }

    static async LoginCheck(username, password, done) {

        let user = await User.findOne({ where: { login: username } })

        if (!user) { return done(null, false); }

        let result = await bcrypt.compare(password, user.password)
        if (!result) {
            return done(null, false)
        }

        return done(null, user)
    }
    static Login(req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (user) {
                req.logIn(user, (err) => {
                    if (err) {
                        res.send({ error: 'Something went wrong' })
                    }
                    res.send({ verify: true, user: req.user })
                })
            }
            else {
                res.send({ error: 'User Not Found' })
            }


        })(req, res, next)
    }

    static async uploadPicture(req, res) {

        await User.update({
            photo: req.file.filename
        }, {
            where: { id: req.user.id }
        });
        res.send({ success: "OK" })
    }


    static Logout(req, res) {
        req.logout()
        res.send({ status: "OK" })
    }

}
module.exports = { UserController }