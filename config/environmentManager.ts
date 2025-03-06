import { devConfig } from "./dev";
import { stagingConfig } from "./staging";
import { productionConfig } from "./production";

const ENV = process.env.TEST_ENV || "dev";

interface Config {
  baseURL: string;
  apiBaseURL: string;
  credentials: {
    username: string;
    password: string;
  };
}

const configs: { [key: string]: Config } = {
  dev: devConfig,
  staging: stagingConfig,
  production: productionConfig,
};

export default configs[ENV];
