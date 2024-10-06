import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendEmailNotificationDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  //   @IsString()
  //   @IsNotEmpty()
  //   subject: string;

  @IsString()
  @IsNotEmpty()
  text!: string;
}
