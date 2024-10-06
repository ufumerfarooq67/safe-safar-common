import { Type } from 'class-transformer';
import { IsDate, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import { CreateChargeDto } from '../billing';

export class CreateUsersManagementDto {
  @IsDate()
  @Type(() => Date)
  startDate!: Date;

  @IsDate()
  @Type(() => Date)
  endDate!: Date;


  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge!: CreateChargeDto;  

}
