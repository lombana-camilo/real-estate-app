import { DataTypes } from "sequelize";

export default (db) => {
  db.define("Property", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rentFrequency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.FLOAT,
    },
    baths: {
      type: DataTypes.FLOAT,
    },
    area: {
      type: DataTypes.FLOAT,
    },
  },{timestamps:false});
};
