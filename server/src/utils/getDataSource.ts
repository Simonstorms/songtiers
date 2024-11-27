import datasource from "../config/database";
import { DataSource } from "typeorm";

let testDataSource: DataSource | null = null;

export const setTestDataSource = (ds: DataSource) => {
  testDataSource = ds;
};

export const getDataSource = () => {
  if (process.env.NODE_ENV === "test" && testDataSource) {
    return testDataSource;
  }
  return datasource;
};
