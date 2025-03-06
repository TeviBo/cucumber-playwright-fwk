import { defaultConfig } from "./default";

export const stagingConfig = {
  ...defaultConfig,
  baseURL: "https://staging.example.com",
  apiBaseURL: "https://api.staging.example.com",
  credentials: {
    username: "staging_user",
    password: "staging_password",
  },
};
