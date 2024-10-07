import { Type } from 'class-transformer';
import { IsDate, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import { CreateChargeDto } from '../billing';
import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class CreateUsersManagementDto {
  @IsDate()
  @Type(() => Date)
  @Field()
  startDate!: Date;

  @IsDate()
  @Type(() => Date)
  @Field()
  endDate!: Date;


  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  @Field(() => CreateChargeDto)
  charge!: CreateChargeDto;  

}
