var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// constants/services.ts
var AUTH_SERVICE = "auth";
var BILLING_SERVICE = "billing";
var NOTIFICATIONS_SERVICE = "notifications";

// decorators/current-user.decorator.ts
import { createParamDecorator } from "@nestjs/common";
var getCurrentUserByContext = /* @__PURE__ */ __name((ctx) => {
  return ctx.switchToHttp().getRequest().user;
}, "getCurrentUserByContext");
var CurrentUser = createParamDecorator((data, ctx) => getCurrentUserByContext(ctx));

// dto/users/create-users-management.dto.ts
import { Type as Type2 } from "class-transformer";
import { IsDate, IsNotEmptyObject as IsNotEmptyObject2, IsObject as IsObject2, ValidateNested as ValidateNested2 } from "class-validator";

// dto/billing/charge.ts
import { IsNotEmpty as IsNotEmpty2, IsNumber as IsNumber2, IsObject, IsNotEmptyObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

// dto/billing/card.ts
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var _CardDto = class _CardDto {
  constructor() {
    __publicField(this, "number");
    __publicField(this, "exp_month");
    __publicField(this, "exp_year");
    __publicField(this, "cvc");
  }
};
__name(_CardDto, "CardDto");
var CardDto = _CardDto;
_ts_decorate([
  IsString(),
  IsNotEmpty(),
  Field(),
  _ts_metadata("design:type", String)
], CardDto.prototype, "number", void 0);
_ts_decorate([
  IsNumber(),
  IsNotEmpty(),
  Field(),
  _ts_metadata("design:type", Number)
], CardDto.prototype, "exp_month", void 0);
_ts_decorate([
  IsNumber(),
  IsNotEmpty(),
  Field(),
  _ts_metadata("design:type", Number)
], CardDto.prototype, "exp_year", void 0);
_ts_decorate([
  IsString(),
  IsNotEmpty(),
  Field(),
  _ts_metadata("design:type", String)
], CardDto.prototype, "cvc", void 0);
CardDto = _ts_decorate([
  InputType()
], CardDto);

// dto/billing/charge.ts
import { InputType as InputType2, Field as Field2 } from "@nestjs/graphql";
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata2, "_ts_metadata");
var _CreateChargeDto = class _CreateChargeDto {
  constructor() {
    __publicField(this, "card");
    __publicField(this, "amount");
  }
};
__name(_CreateChargeDto, "CreateChargeDto");
var CreateChargeDto = _CreateChargeDto;
_ts_decorate2([
  IsObject(),
  IsNotEmptyObject(),
  ValidateNested(),
  Type(() => CardDto),
  Field2(() => CardDto),
  _ts_metadata2("design:type", typeof CardDto === "undefined" ? Object : CardDto)
], CreateChargeDto.prototype, "card", void 0);
_ts_decorate2([
  IsNumber2(),
  IsNotEmpty2(),
  Field2(),
  _ts_metadata2("design:type", Number)
], CreateChargeDto.prototype, "amount", void 0);
CreateChargeDto = _ts_decorate2([
  InputType2()
], CreateChargeDto);

// dto/billing/payment.ts
import { IsString as IsString2, IsNotEmpty as IsNotEmpty3 } from "class-validator";
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata3, "_ts_metadata");
var _CreatePaymentChargeDto = class _CreatePaymentChargeDto extends CreateChargeDto {
  constructor() {
    super(...arguments);
    __publicField(this, "email");
  }
};
__name(_CreatePaymentChargeDto, "CreatePaymentChargeDto");
var CreatePaymentChargeDto = _CreatePaymentChargeDto;
_ts_decorate3([
  IsString2(),
  IsNotEmpty3(),
  _ts_metadata3("design:type", String)
], CreatePaymentChargeDto.prototype, "email", void 0);

// dto/users/create-users-management.dto.ts
import { InputType as InputType3, Field as Field3 } from "@nestjs/graphql";
function _ts_decorate4(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata4, "_ts_metadata");
var _CreateUsersManagementDto = class _CreateUsersManagementDto {
  constructor() {
    __publicField(this, "startDate");
    __publicField(this, "endDate");
    __publicField(this, "charge");
  }
};
__name(_CreateUsersManagementDto, "CreateUsersManagementDto");
var CreateUsersManagementDto = _CreateUsersManagementDto;
_ts_decorate4([
  IsDate(),
  Type2(() => Date),
  Field3(),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], CreateUsersManagementDto.prototype, "startDate", void 0);
_ts_decorate4([
  IsDate(),
  Type2(() => Date),
  Field3(),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], CreateUsersManagementDto.prototype, "endDate", void 0);
_ts_decorate4([
  IsObject2(),
  IsNotEmptyObject2(),
  ValidateNested2(),
  Type2(() => CreateChargeDto),
  Field3(() => CreateChargeDto),
  _ts_metadata4("design:type", typeof CreateChargeDto === "undefined" ? Object : CreateChargeDto)
], CreateUsersManagementDto.prototype, "charge", void 0);
CreateUsersManagementDto = _ts_decorate4([
  InputType3()
], CreateUsersManagementDto);

// dto/users/update-users-management.dto.ts
import { PartialType } from "@nestjs/mapped-types";
import { InputType as InputType4 } from "@nestjs/graphql";
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
var _UpdateUsersManagementDto = class _UpdateUsersManagementDto extends PartialType(CreateUsersManagementDto) {
};
__name(_UpdateUsersManagementDto, "UpdateUsersManagementDto");
var UpdateUsersManagementDto = _UpdateUsersManagementDto;
UpdateUsersManagementDto = _ts_decorate5([
  InputType4()
], UpdateUsersManagementDto);

// dto/users/create-user.dto.ts
import { IsEmail, IsNotEmpty as IsNotEmpty4, IsString as IsString3, IsStrongPassword } from "class-validator";
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata5(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata5, "_ts_metadata");
var _CreateUserDto = class _CreateUserDto {
  constructor() {
    __publicField(this, "email");
    __publicField(this, "password");
  }
};
__name(_CreateUserDto, "CreateUserDto");
var CreateUserDto = _CreateUserDto;
_ts_decorate6([
  IsString3(),
  IsNotEmpty4(),
  IsEmail(),
  _ts_metadata5("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate6([
  IsString3(),
  IsNotEmpty4(),
  IsStrongPassword(),
  _ts_metadata5("design:type", String)
], CreateUserDto.prototype, "password", void 0);

// dto/users/get-user.dto.ts
import { IsString as IsString4, IsNotEmpty as IsNotEmpty5 } from "class-validator";
function _ts_decorate7(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
function _ts_metadata6(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata6, "_ts_metadata");
var _GetUserDto = class _GetUserDto {
  constructor() {
    __publicField(this, "_id");
  }
};
__name(_GetUserDto, "GetUserDto");
var GetUserDto = _GetUserDto;
_ts_decorate7([
  IsString4(),
  IsNotEmpty5(),
  _ts_metadata6("design:type", String)
], GetUserDto.prototype, "_id", void 0);

// dto/notifications/email/index.ts
import { IsEmail as IsEmail2, IsNotEmpty as IsNotEmpty6, IsString as IsString5 } from "class-validator";
function _ts_decorate8(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
function _ts_metadata7(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata7, "_ts_metadata");
var _SendEmailNotificationDto = class _SendEmailNotificationDto {
  constructor() {
    __publicField(this, "email");
    //   @IsString()
    //   @IsNotEmpty()
    //   subject: string;
    __publicField(this, "text");
  }
};
__name(_SendEmailNotificationDto, "SendEmailNotificationDto");
var SendEmailNotificationDto = _SendEmailNotificationDto;
_ts_decorate8([
  IsEmail2(),
  IsNotEmpty6(),
  _ts_metadata7("design:type", String)
], SendEmailNotificationDto.prototype, "email", void 0);
_ts_decorate8([
  IsString5(),
  IsNotEmpty6(),
  _ts_metadata7("design:type", String)
], SendEmailNotificationDto.prototype, "text", void 0);

// guards/jwt-auth.guard.ts
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { catchError, map, of, tap } from "rxjs";
function _ts_decorate9(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate9, "_ts_decorate");
function _ts_metadata8(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata8, "_ts_metadata");
function _ts_param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(_ts_param, "_ts_param");
var _JwtAuthGuard = class _JwtAuthGuard {
  constructor(authClient) {
    __publicField(this, "authClient");
    this.authClient = authClient;
  }
  canActivate(context) {
    var _a;
    const request = context.switchToHttp().getRequest();
    const token = (_a = request.cookies) == null ? void 0 : _a["Authentication"];
    if (!token) {
      throw false;
    }
    return this.authClient.send("authenticate", {
      Authentication: token
    }).pipe(tap((res) => {
      context.switchToHttp().getRequest().user = res;
    }), map(() => true), catchError(() => of(false)));
  }
};
__name(_JwtAuthGuard, "JwtAuthGuard");
var JwtAuthGuard = _JwtAuthGuard;
JwtAuthGuard = _ts_decorate9([
  Injectable(),
  _ts_param(0, Inject("NATS_SERVICE")),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof ClientProxy === "undefined" ? Object : ClientProxy
  ])
], JwtAuthGuard);

// services/database/database.module.ts
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
function _ts_decorate10(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate10, "_ts_decorate");
var _DatabaseModule = class _DatabaseModule {
  static forFeature(models) {
    return MongooseModule.forFeature(models);
  }
};
__name(_DatabaseModule, "DatabaseModule");
var DatabaseModule = _DatabaseModule;
DatabaseModule = _ts_decorate10([
  Module({
    imports: [
      MongooseModule.forRootAsync({
        useFactory: /* @__PURE__ */ __name((configService) => ({
          uri: configService.get("DATABASE_URL"),
          authSource: "admin"
        }), "useFactory"),
        inject: [
          ConfigService
        ]
      })
    ]
  })
], DatabaseModule);

// services/database/abstract.repository.ts
import { Types } from "mongoose";
import { NotFoundException } from "@nestjs/common";
var _AbstractRepository = class _AbstractRepository {
  constructor(model) {
    __publicField(this, "model");
    this.model = model;
  }
  create(createEntityDto) {
    return __async(this, null, function* () {
      const createdEntity = new this.model(__spreadProps(__spreadValues({}, createEntityDto), {
        _id: new Types.ObjectId()
      }));
      return (yield createdEntity.save()).toJSON();
    });
  }
  findOne(filter) {
    return __async(this, null, function* () {
      const entity = yield this.model.findOne(filter).lean(true);
      if (!entity) {
        this.logger.warn("Entity not found", {
          filter
        });
        throw new NotFoundException("Entity not found");
      }
      return entity;
    });
  }
  findOneAndUpdate(filter, update) {
    return __async(this, null, function* () {
      const entity = yield this.model.findOneAndUpdate(filter, update, {
        new: true
      }).lean(true);
      if (!entity) {
        this.logger.warn("Entity not found", {
          filter
        });
        throw new NotFoundException("Entity not found");
      }
      return entity;
    });
  }
  findAll(filter) {
    return __async(this, null, function* () {
      return this.model.find(filter).lean(true);
    });
  }
  findOneAndDelete(filter) {
    return __async(this, null, function* () {
      const entity = yield this.model.findOneAndDelete(filter).lean(true);
      if (!entity) {
        this.logger.warn("Entity not found", {
          filter
        });
        throw new NotFoundException("Entity not found");
      }
      return entity;
    });
  }
};
__name(_AbstractRepository, "AbstractRepository");
var AbstractRepository = _AbstractRepository;

// services/database/abstract.schema.ts
import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaTypes, Types as Types2 } from "mongoose";
import { Field as Field4, ObjectType } from "@nestjs/graphql";
function _ts_decorate11(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate11, "_ts_decorate");
function _ts_metadata9(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata9, "_ts_metadata");
var _AbstractSchema = class _AbstractSchema {
  constructor() {
    __publicField(this, "_id");
  }
};
__name(_AbstractSchema, "AbstractSchema");
var AbstractSchema = _AbstractSchema;
_ts_decorate11([
  Prop({
    type: SchemaTypes.ObjectId
  }),
  Field4(() => String),
  _ts_metadata9("design:type", typeof Types2 === "undefined" || typeof Types2.ObjectId === "undefined" ? Object : Types2.ObjectId)
], AbstractSchema.prototype, "_id", void 0);
AbstractSchema = _ts_decorate11([
  Schema(),
  ObjectType({
    isAbstract: true
  })
], AbstractSchema);

// models/users/user.schema.ts
import { Prop as Prop2, SchemaFactory } from "@nestjs/mongoose";
import { Schema as Schema2 } from "@nestjs/mongoose";
function _ts_decorate12(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate12, "_ts_decorate");
function _ts_metadata10(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata10, "_ts_metadata");
var _UserDocument = class _UserDocument extends AbstractSchema {
  constructor() {
    super(...arguments);
    __publicField(this, "email");
    __publicField(this, "password");
  }
};
__name(_UserDocument, "UserDocument");
var UserDocument = _UserDocument;
_ts_decorate12([
  Prop2({
    required: true
  }),
  _ts_metadata10("design:type", String)
], UserDocument.prototype, "email", void 0);
_ts_decorate12([
  Prop2({
    required: true
  }),
  _ts_metadata10("design:type", String)
], UserDocument.prototype, "password", void 0);
UserDocument = _ts_decorate12([
  Schema2({
    versionKey: false
  })
], UserDocument);
var UserSchema = SchemaFactory.createForClass(UserDocument);

// models/users/users-management.schema.ts
import { Prop as Prop3, SchemaFactory as SchemaFactory2 } from "@nestjs/mongoose";
import { Schema as Schema3 } from "@nestjs/mongoose";
import { Field as Field5, ObjectType as ObjectType2 } from "@nestjs/graphql";
function _ts_decorate13(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate13, "_ts_decorate");
function _ts_metadata11(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata11, "_ts_metadata");
var _UserManagementDocument = class _UserManagementDocument extends AbstractSchema {
  constructor() {
    super(...arguments);
    __publicField(this, "timestamp");
    __publicField(this, "startDate");
    __publicField(this, "endDate");
    __publicField(this, "userId");
    __publicField(this, "invoiceId");
  }
};
__name(_UserManagementDocument, "UserManagementDocument");
var UserManagementDocument = _UserManagementDocument;
_ts_decorate13([
  Prop3({
    required: true
  }),
  Field5(),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], UserManagementDocument.prototype, "timestamp", void 0);
_ts_decorate13([
  Prop3({
    required: true
  }),
  Field5(),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], UserManagementDocument.prototype, "startDate", void 0);
_ts_decorate13([
  Prop3({
    required: true
  }),
  Field5(),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], UserManagementDocument.prototype, "endDate", void 0);
_ts_decorate13([
  Prop3({
    required: true
  }),
  Field5(),
  _ts_metadata11("design:type", String)
], UserManagementDocument.prototype, "userId", void 0);
_ts_decorate13([
  Prop3({
    required: true
  }),
  Field5(),
  _ts_metadata11("design:type", String)
], UserManagementDocument.prototype, "invoiceId", void 0);
UserManagementDocument = _ts_decorate13([
  Schema3({
    versionKey: false
  }),
  ObjectType2()
], UserManagementDocument);
var UserManagementSchema = SchemaFactory2.createForClass(UserManagementDocument);

// services/logger/logger.module.ts
import { Module as Module2 } from "@nestjs/common";
import { LoggerModule as PinoLoggerModule } from "nestjs-pino";
function _ts_decorate14(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate14, "_ts_decorate");
var _LoggerModule = class _LoggerModule {
};
__name(_LoggerModule, "LoggerModule");
var LoggerModule = _LoggerModule;
LoggerModule = _ts_decorate14([
  Module2({
    imports: [
      PinoLoggerModule.forRoot({
        pinoHttp: {
          transport: {
            target: "pino-pretty",
            options: {
              colorize: true,
              singleLine: true
            }
          }
        }
      })
    ]
  })
], LoggerModule);

// services/logger/common.logger.ts
import { Logger } from "@nestjs/common";
var createLogger = /* @__PURE__ */ __name((name) => {
  return new Logger(name);
}, "createLogger");
export {
  AUTH_SERVICE,
  AbstractRepository,
  AbstractSchema,
  BILLING_SERVICE,
  CardDto,
  CreateChargeDto,
  CreatePaymentChargeDto,
  CreateUserDto,
  CreateUsersManagementDto,
  CurrentUser,
  DatabaseModule,
  GetUserDto,
  JwtAuthGuard,
  LoggerModule,
  NOTIFICATIONS_SERVICE,
  SendEmailNotificationDto,
  UpdateUsersManagementDto,
  UserDocument,
  UserManagementDocument,
  UserManagementSchema,
  UserSchema,
  createLogger
};
