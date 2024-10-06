import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserDocument } from "../models";




const getCurrentUserByContext = (ctx: ExecutionContext): UserDocument => {
  return ctx.switchToHttp().getRequest().user;

};

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => getCurrentUserByContext(ctx)
);
