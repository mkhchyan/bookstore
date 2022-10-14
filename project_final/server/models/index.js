const { Sequelize } = require('sequelize')
const config = {DB:"library", USER:"root",PASSWORD:""}
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
})
const User = require('./user')(sequelize, Sequelize);
const Post = require("./post")(sequelize, Sequelize);
const Book = require("./book")(sequelize, Sequelize);
User.hasMany(Post);
Post.belongsTo(User);

(async () => {
    await sequelize.sync()

})()
// console.log("OK");
// sequelize.sync({force: true})
module.exports = {
    User,
    Post,
    Book
}
