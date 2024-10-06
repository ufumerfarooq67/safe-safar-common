import { IsString, IsNotEmpty } from 'class-validator';
import { CreateChargeDto } from './charge';

export class CreatePaymentChargeDto extends CreateChargeDto {
  @IsString()
  @IsNotEmpty()
  email!: string;
}
