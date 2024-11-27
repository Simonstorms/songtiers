"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSource = void 0;
const database_1 = __importDefault(require("../config/database"));
const jest_setup_1 = require("../../tests/jest.setup");
const getDataSource = () => {
    return process.env.NODE_ENV === "test" ? jest_setup_1.testDataSource : database_1.default;
};
exports.getDataSource = getDataSource;
