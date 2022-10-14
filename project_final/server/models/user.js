module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        name: {
            type: Sequelize.STRING,
        },
        surname: {
            type: Sequelize.STRING,

        },
        login: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        photo: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        verify: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        token: {

            type: Sequelize.STRING
        },
         
    },
        {
            freezeTableName: true,
            timestamps: false,
        })
    return User
};