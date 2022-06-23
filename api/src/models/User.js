import { DataTypes } from "sequelize";
// import { db } from "./../db";

export default (db) => {
  db.define(
    "User",
    {
      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      //   primaryKey: true,
      //   allowNull: false,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
