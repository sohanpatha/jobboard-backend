import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const Job = sequelize.define("Job", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  company: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  salary: { type: DataTypes.INTEGER },
  postedBy: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: "id" } },
}, { timestamps: true });

export default Job;
