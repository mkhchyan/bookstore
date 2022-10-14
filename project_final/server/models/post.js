module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts', {
        post: {
            type: Sequelize.STRING,
            allowNull: false
        },
        usersId: {
            type: Sequelize.INTEGER,
            references: {
                model: "usersId",
                key: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
    return Post;
};