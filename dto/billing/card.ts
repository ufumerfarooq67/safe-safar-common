import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CardDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  number!: string;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  exp_month!: number;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  exp_year!: number;
  
  @IsString()
  @IsNotEmpty()
  @Field()
  cvc!: string;
}
