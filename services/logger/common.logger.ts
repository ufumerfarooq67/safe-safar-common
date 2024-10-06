import { TCustomLogger } from "../../types";
import { Logger } from "@nestjs/common";

export const createLogger = (name: string): TCustomLogger => {
  return new Logger(name);
};
