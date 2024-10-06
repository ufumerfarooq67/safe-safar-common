import * as _nestjs_mapped_types from '@nestjs/mapped-types';
import * as _nestjs_common from '@nestjs/common';
import { CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import * as mongoose from 'mongoose';
import { Types, Model, FilterQuery } from 'mongoose';
import { ModelDefinition } from '@nestjs/mongoose';

declare const AUTH_SERVICE: string;
declare const BILLING_SERVICE: string;
declare const NOTIFICATIONS_SERVICE: string;

declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;

declare class CardDto {
    number: string;
    exp_month: number;
    exp_year: number;
    cvc: string;
}

declare class CreateChargeDto {
    card: CardDto;
    amount: number;
}

declare class CreatePaymentChargeDto extends CreateChargeDto {
    email: string;
}

declare class CreateUsersManagementDto {
    startDate: Date;
    endDate: Date;
    charge: CreateChargeDto;
}

declare const UpdateUsersManagementDto_base: _nestjs_mapped_types.MappedType<Partial<CreateUsersManagementDto>>;
declare class UpdateUsersManagementDto extends UpdateUsersManagementDto_base {
}

declare class CreateUserDto {
    email: string;
    password: string;
}

declare class GetUserDto {
    _id: string;
}

interface UserDto {
    _id: string;
    email: string;
    password: string;
}

declare class SendEmailNotificationDto {
    email: string;
    text: string;
}

declare class JwtAuthGuard implements CanActivate {
    private readonly authClient;
    constructor(authClient: ClientProxy);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}

declare class DatabaseModule {
    static forFeature(models: ModelDefinition[]): _nestjs_common.DynamicModule;
}

declare abstract class AbstractSchema {
    _id: Types.ObjectId;
}

type TCustomLogger = Logger;

declare abstract class AbstractRepository<T extends AbstractSchema> {
    protected readonly model: Model<T>;
    protected abstract readonly logger: TCustomLogger;
    constructor(model: Model<T>);
    create(createEntityDto: Partial<T>): Promise<T>;
    findOne(filter: FilterQuery<T>): Promise<T | null>;
    findOneAndUpdate(filter: FilterQuery<T>, update: Partial<T>): Promise<T | null>;
    findAll(filter: Partial<T>): Promise<T[]>;
    findOneAndDelete(filter: FilterQuery<T>): Promise<T | null>;
}

declare class UserDocument extends AbstractSchema {
    email: string;
    password: string;
}
declare const UserSchema: mongoose.Schema<UserDocument, mongoose.Model<UserDocument, any, any, any, mongoose.Document<unknown, any, UserDocument> & UserDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserDocument, mongoose.Document<unknown, {}, mongoose.FlatRecord<UserDocument>> & mongoose.FlatRecord<UserDocument> & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v?: number;
}>;

declare class UserManagementDocument extends AbstractSchema {
    timestamp: Date;
    startDate: Date;
    endDate: Date;
    userId: string;
    invoiceId: string;
}
declare const UserManagementSchema: mongoose.Schema<UserManagementDocument, mongoose.Model<UserManagementDocument, any, any, any, mongoose.Document<unknown, any, UserManagementDocument> & UserManagementDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserManagementDocument, mongoose.Document<unknown, {}, mongoose.FlatRecord<UserManagementDocument>> & mongoose.FlatRecord<UserManagementDocument> & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v?: number;
}>;

declare class LoggerModule {
}

declare const createLogger: (name: string) => TCustomLogger;

export { AUTH_SERVICE, AbstractRepository, AbstractSchema, BILLING_SERVICE, CardDto, CreateChargeDto, CreatePaymentChargeDto, CreateUserDto, CreateUsersManagementDto, CurrentUser, DatabaseModule, GetUserDto, JwtAuthGuard, LoggerModule, NOTIFICATIONS_SERVICE, SendEmailNotificationDto, type TCustomLogger, UpdateUsersManagementDto, UserDocument, type UserDto, UserManagementDocument, UserManagementSchema, UserSchema, createLogger };
