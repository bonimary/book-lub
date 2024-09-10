'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      autor: DataTypes.STRING,
      description: DataTypes.TEXT,
      imge: DataTypes.STRING,
      pages: DataTypes.INTEGER,
      language: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
    },
  );
  return Book;
};
