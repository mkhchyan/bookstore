module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('books', {
    title: {
      type: Sequelize.STRING,
      required: true
    },
    pages: {
      type: Sequelize.INTEGER,
      required: true
    },
    genre: {
      type: Sequelize.STRING,
      required: true
    },
    author: {
      type: Sequelize.STRING,
      required: true
    },
    cover: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING
    },
    count: {
      type: Sequelize.INTEGER,
      required: true
    },
  },
    {
      freezeTableName: true,
      timestamps: false,
    })
  return Book
}