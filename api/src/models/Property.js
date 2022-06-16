import { DataTypes } from "sequelize";

export default (db) => {
  db.define( "Property", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverPhoto: {
        type: DataTypes.STRING,
        // allowNull: false,
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
        type: DataTypes.INTEGER,
      },
      baths: {
        type: DataTypes.INTEGER,
      },
      area: {
        type: DataTypes.FLOAT,
      },
    }
    // { timestamps: false }
  );
};
