"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// index.ts
var libs_exports = {};
__export(libs_exports, {
  AUTH_SERVICE: () => AUTH_SERVICE,
  AbstractRepository: () => AbstractRepository,
  AbstractSchema: () => AbstractSchema,
  BILLING_SERVICE: () => BILLING_SERVICE,
  CardDto: () => CardDto,
  CreateChargeDto: () => CreateChargeDto,
  CreatePaymentChargeDto: () => CreatePaymentChargeDto,
  CreateUserDto: () => CreateUserDto,
  CreateUsersManagementDto: () => CreateUsersManagementDto,
  CurrentUser: () => CurrentUser,
  DatabaseModule: () => DatabaseModule,
  GetUserDto: () => GetUserDto,
  JwtAuthGuard: () => JwtAuthGuard,
  LoggerModule: () => LoggerModule,
  NOTIFICATIONS_SERVICE: () => NOTIFICATIONS_SERVICE,
  SendEmailNotificationDto: () => SendEmailNotificationDto,
  UpdateUsersManagementDto: () => UpdateUsersManagementDto,
  UserDocument: () => UserDocument,
  UserManagementDocument: () => UserManagementDocument,
  UserManagementSchema: () => UserManagementSchema,
  UserSchema: () => UserSchema,
  createLogger: () => createLogger
});
module.exports = __toCommonJS(libs_exports);

// constants/services.ts
var AUTH_SERVICE = "auth";
var BILLING_SERVICE = "billing";
var NOTIFICATIONS_SERVICE = "notifications";

// decorators/current-user.decorator.ts
var import_common = require("@nestjs/common");
var getCurrentUserByContext = /* @__PURE__ */ __name((ctx) => {
  return ctx.switchToHttp().getRequest().user;
}, "getCurrentUserByContext");
var CurrentUser = (0, import_common.createParamDecorator)((data, ctx) => getCurrentUserByContext(ctx));

// dto/users/create-users-management.dto.ts
var import_class_transformer2 = require("class-transformer");
var import_class_validator4 = require("class-validator");

// dto/billing/charge.ts
var import_class_validator2 = require("class-validator");
var import_class_transformer = require("class-transformer");

// dto/billing/card.ts
var import_class_validator = require("class-validator");
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
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsNotEmpty)(),
  _ts_metadata("design:type", String)
], CardDto.prototype, "number", void 0);
_ts_decorate([
  (0, import_class_validator.IsNumber)(),
  (0, import_class_validator.IsNotEmpty)(),
  _ts_metadata("design:type", Number)
], CardDto.prototype, "exp_month", void 0);
_ts_decorate([
  (0, import_class_validator.IsNumber)(),
  (0, import_class_validator.IsNotEmpty)(),
  _ts_metadata("design:type", Number)
], CardDto.prototype, "exp_year", void 0);
_ts_decorate([
  (0, import_class_validator.IsString)(),
  (0, import_class_validator.IsNotEmpty)(),
  _ts_metadata("design:type", String)
], CardDto.prototype, "cvc", void 0);

// dto/billing/charge.ts
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
  (0, import_class_validator2.IsObject)(),
  (0, import_class_validator2.IsNotEmptyObject)(),
  (0, import_class_validator2.ValidateNested)(),
  (0, import_class_transformer.Type)(() => CardDto),
  _ts_metadata2("design:type", typeof CardDto === "undefined" ? Object : CardDto)
], CreateChargeDto.prototype, "card", void 0);
_ts_decorate2([
  (0, import_class_validator2.IsNumber)(),
  (0, import_class_validator2.IsNotEmpty)(),
  _ts_metadata2("design:type", Number)
], CreateChargeDto.prototype, "amount", void 0);

// dto/billing/payment.ts
var import_class_validator3 = require("class-validator");
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
  (0, import_class_validator3.IsString)(),
  (0, import_class_validator3.IsNotEmpty)(),
  _ts_metadata3("design:type", String)
], CreatePaymentChargeDto.prototype, "email", void 0);

// dto/users/create-users-management.dto.ts
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
  (0, import_class_validator4.IsDate)(),
  (0, import_class_transformer2.Type)(() => Date),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], CreateUsersManagementDto.prototype, "startDate", void 0);
_ts_decorate4([
  (0, import_class_validator4.IsDate)(),
  (0, import_class_transformer2.Type)(() => Date),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], CreateUsersManagementDto.prototype, "endDate", void 0);
_ts_decorate4([
  (0, import_class_validator4.IsObject)(),
  (0, import_class_validator4.IsNotEmptyObject)(),
  (0, import_class_validator4.ValidateNested)(),
  (0, import_class_transformer2.Type)(() => CreateChargeDto),
  _ts_metadata4("design:type", typeof CreateChargeDto === "undefined" ? Object : CreateChargeDto)
], CreateUsersManagementDto.prototype, "charge", void 0);

// dto/users/update-users-management.dto.ts
var import_mapped_types = require("@nestjs/mapped-types");
var _UpdateUsersManagementDto = class _UpdateUsersManagementDto extends (0, import_mapped_types.PartialType)(CreateUsersManagementDto) {
};
__name(_UpdateUsersManagementDto, "UpdateUsersManagementDto");
var UpdateUsersManagementDto = _UpdateUsersManagementDto;

// dto/users/create-user.dto.ts
var import_class_validator5 = require("class-validator");
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
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
_ts_decorate5([
  (0, import_class_validator5.IsString)(),
  (0, import_class_validator5.IsNotEmpty)(),
  (0, import_class_validator5.IsEmail)(),
  _ts_metadata5("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate5([
  (0, import_class_validator5.IsString)(),
  (0, import_class_validator5.IsNotEmpty)(),
  (0, import_class_validator5.IsStrongPassword)(),
  _ts_metadata5("design:type", String)
], CreateUserDto.prototype, "password", void 0);

// dto/users/get-user.dto.ts
var import_class_validator6 = require("class-validator");
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
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
_ts_decorate6([
  (0, import_class_validator6.IsString)(),
  (0, import_class_validator6.IsNotEmpty)(),
  _ts_metadata6("design:type", String)
], GetUserDto.prototype, "_id", void 0);

// dto/notifications/email/index.ts
var import_class_validator7 = require("class-validator");
function _ts_decorate7(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
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
_ts_decorate7([
  (0, import_class_validator7.IsEmail)(),
  (0, import_class_validator7.IsNotEmpty)(),
  _ts_metadata7("design:type", String)
], SendEmailNotificationDto.prototype, "email", void 0);
_ts_decorate7([
  (0, import_class_validator7.IsString)(),
  (0, import_class_validator7.IsNotEmpty)(),
  _ts_metadata7("design:type", String)
], SendEmailNotificationDto.prototype, "text", void 0);

// guards/jwt-auth.guard.ts
var import_common2 = require("@nestjs/common");
var import_microservices = require("@nestjs/microservices");
var import_rxjs = require("rxjs");
function _ts_decorate8(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
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
    }).pipe((0, import_rxjs.tap)((res) => {
      context.switchToHttp().getRequest().user = res;
    }), (0, import_rxjs.map)(() => true), (0, import_rxjs.catchError)(() => (0, import_rxjs.of)(false)));
  }
};
__name(_JwtAuthGuard, "JwtAuthGuard");
var JwtAuthGuard = _JwtAuthGuard;
JwtAuthGuard = _ts_decorate8([
  (0, import_common2.Injectable)(),
  _ts_param(0, (0, import_common2.Inject)(AUTH_SERVICE)),
  _ts_metadata8("design:type", Function),
  _ts_metadata8("design:paramtypes", [
    typeof import_microservices.ClientProxy === "undefined" ? Object : import_microservices.ClientProxy
  ])
], JwtAuthGuard);

// services/database/database.module.ts
var import_common3 = require("@nestjs/common");
var import_config = require("@nestjs/config");
var import_mongoose = require("@nestjs/mongoose");
function _ts_decorate9(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate9, "_ts_decorate");
var _DatabaseModule = class _DatabaseModule {
  static forFeature(models) {
    return import_mongoose.MongooseModule.forFeature(models);
  }
};
__name(_DatabaseModule, "DatabaseModule");
var DatabaseModule = _DatabaseModule;
DatabaseModule = _ts_decorate9([
  (0, import_common3.Module)({
    imports: [
      import_mongoose.MongooseModule.forRootAsync({
        useFactory: /* @__PURE__ */ __name((configService) => ({
          uri: configService.get("DATABASE_URL"),
          authSource: "admin"
        }), "useFactory"),
        inject: [
          import_config.ConfigService
        ]
      })
    ]
  })
], DatabaseModule);

// services/database/abstract.repository.ts
var import_mongoose2 = require("mongoose");
var import_common4 = require("@nestjs/common");
var _AbstractRepository = class _AbstractRepository {
  constructor(model) {
    __publicField(this, "model");
    this.model = model;
  }
  create(createEntityDto) {
    return __async(this, null, function* () {
      const createdEntity = new this.model(__spreadProps(__spreadValues({}, createEntityDto), {
        _id: new import_mongoose2.Types.ObjectId()
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
        throw new import_common4.NotFoundException("Entity not found");
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
        throw new import_common4.NotFoundException("Entity not found");
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
        throw new import_common4.NotFoundException("Entity not found");
      }
      return entity;
    });
  }
};
__name(_AbstractRepository, "AbstractRepository");
var AbstractRepository = _AbstractRepository;

// services/database/abstract.schema.ts
var import_mongoose3 = require("@nestjs/mongoose");
var import_mongoose4 = require("mongoose");
function _ts_decorate10(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate10, "_ts_decorate");
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
_ts_decorate10([
  (0, import_mongoose3.Prop)({
    type: import_mongoose4.SchemaTypes.ObjectId
  }),
  _ts_metadata9("design:type", typeof import_mongoose4.Types === "undefined" || typeof import_mongoose4.Types.ObjectId === "undefined" ? Object : import_mongoose4.Types.ObjectId)
], AbstractSchema.prototype, "_id", void 0);
AbstractSchema = _ts_decorate10([
  (0, import_mongoose3.Schema)()
], AbstractSchema);

// models/users/user.schema.ts
var import_mongoose5 = require("@nestjs/mongoose");
var import_mongoose6 = require("@nestjs/mongoose");
function _ts_decorate11(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate11, "_ts_decorate");
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
_ts_decorate11([
  (0, import_mongoose5.Prop)({
    required: true
  }),
  _ts_metadata10("design:type", String)
], UserDocument.prototype, "email", void 0);
_ts_decorate11([
  (0, import_mongoose5.Prop)({
    required: true
  }),
  _ts_metadata10("design:type", String)
], UserDocument.prototype, "password", void 0);
UserDocument = _ts_decorate11([
  (0, import_mongoose6.Schema)({
    versionKey: false
  })
], UserDocument);
var UserSchema = import_mongoose5.SchemaFactory.createForClass(UserDocument);

// models/users/users-management.schema.ts
var import_mongoose7 = require("@nestjs/mongoose");
var import_mongoose8 = require("@nestjs/mongoose");
function _ts_decorate12(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate12, "_ts_decorate");
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
_ts_decorate12([
  (0, import_mongoose7.Prop)({
    required: true
  }),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], UserManagementDocument.prototype, "timestamp", void 0);
_ts_decorate12([
  (0, import_mongoose7.Prop)({
    required: true
  }),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], UserManagementDocument.prototype, "startDate", void 0);
_ts_decorate12([
  (0, import_mongoose7.Prop)({
    required: true
  }),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], UserManagementDocument.prototype, "endDate", void 0);
_ts_decorate12([
  (0, import_mongoose7.Prop)({
    required: true
  }),
  _ts_metadata11("design:type", String)
], UserManagementDocument.prototype, "userId", void 0);
_ts_decorate12([
  (0, import_mongoose7.Prop)({
    required: true
  }),
  _ts_metadata11("design:type", String)
], UserManagementDocument.prototype, "invoiceId", void 0);
UserManagementDocument = _ts_decorate12([
  (0, import_mongoose8.Schema)({
    versionKey: false
  })
], UserManagementDocument);
var UserManagementSchema = import_mongoose7.SchemaFactory.createForClass(UserManagementDocument);

// services/logger/logger.module.ts
var import_common5 = require("@nestjs/common");
var import_nestjs_pino = require("nestjs-pino");
function _ts_decorate13(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate13, "_ts_decorate");
var _LoggerModule = class _LoggerModule {
};
__name(_LoggerModule, "LoggerModule");
var LoggerModule = _LoggerModule;
LoggerModule = _ts_decorate13([
  (0, import_common5.Module)({
    imports: [
      import_nestjs_pino.LoggerModule.forRoot({
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
var import_common6 = require("@nestjs/common");
var createLogger = /* @__PURE__ */ __name((name) => {
  return new import_common6.Logger(name);
}, "createLogger");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
