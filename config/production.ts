import { defaultConfig } from "./default";

export const productionConfig = {
  ...defaultConfig,
  baseURL: "https://production.example.com",
  apiBaseURL: "https://api.production.example.com",
  credentials: {
    username: "production_user",
    password: "production_password",
  },
};
