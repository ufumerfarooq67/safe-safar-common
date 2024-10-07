import { IsNotEmpty, IsNumber, IsObject, IsNotEmptyObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

// DTOs
import { CardDto } from "./card";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateChargeDto {
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CardDto)
  @Field(() => CardDto)
  card!: CardDto;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  amount!: number;
}
