import { IsNotEmpty, IsNumber, IsObject, IsNotEmptyObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

// DTOs
import { CardDto } from "./card";

export class CreateChargeDto {
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CardDto)
  card!: CardDto;

  @IsNumber()
  @IsNotEmpty()
  amount!: number;
}
