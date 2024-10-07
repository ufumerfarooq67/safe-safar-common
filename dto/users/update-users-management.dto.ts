import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersManagementDto } from './create-users-management.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUsersManagementDto extends PartialType(CreateUsersManagementDto) {}
