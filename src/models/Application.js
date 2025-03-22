import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import Job from "./Job.js";

const Application = sequelize.define("Application", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  jobId: { type: DataTypes.UUID, references: { model: Job, key: "id" } },
  applicantId: { type: DataTypes.UUID, references: { model: User, key: "id" } },
  resumeUrl: { type: DataTypes.STRING },
  status: { type: DataTypes.ENUM("Pending", "Accepted", "Rejected"), defaultValue: "Pending" },
}, { timestamps: true });

export default Application;
