const express = require("express")
const cors = require("cors")
const { UserController } = require("./controllers/UserController")
const app = express()
const { User } = require("./models")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const multer = require('multer')
const { BookController } = require("./controllers/BookController")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })
app.use(express.static("public"))

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.post("/addUser", UserController.addUser)
app.post("/login", UserController.Login)
app.post("/getUser", UserController.GetUser)
app.post("/addPhoto", upload.single('nkar'), UserController.uploadPicture)
app.post("/checkIsAdmin", UserController.checkIsAdmin)
app.post("/addbook", upload.single("cover"), BookController.addBook)
app.post("/getbook", BookController.getBooks)

passport.use(new LocalStrategy(
    UserController.LoginCheck
))
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    let user = await User.findByPk(id)
    done(null, user);
})






app.listen(5000, () => {
    console.log("Started...")
})