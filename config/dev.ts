import { defaultConfig } from "./default";

export const devConfig = {
  ...defaultConfig,
  baseURL: "https://dev.example.com",
  apiBaseURL: "https://api.dev.example.com",
  credentials: {
    username: "dev_user",
    password: "dev_password",
  },
};
