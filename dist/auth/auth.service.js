"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../users/entities/user.entity");
const users_json_1 = __importDefault(require("../users/users.json"));
const users = (0, class_transformer_1.plainToClass)(user_entity_1.User, users_json_1.default);
let AuthService = class AuthService {
    constructor() {
        this.users = users;
        // updateUser(id: number, updateUserInput: UpdateUserInput) {
        //   return `This action updates a #${id} user`;
        // }
    }
    async register(createUserInput) {
        const user = Object.assign(Object.assign(Object.assign({ id: (0, uuid_1.v4)() }, users[0]), createUserInput), { created_at: new Date(), updated_at: new Date() });
        this.users.push(user);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async login(loginInput) {
        console.log(loginInput);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async changePassword(changePasswordInput) {
        console.log(changePasswordInput);
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async forgetPassword(forgetPasswordInput) {
        console.log(forgetPasswordInput);
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async verifyForgetPasswordToken(verifyForgetPasswordTokenInput) {
        console.log(verifyForgetPasswordTokenInput);
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async resetPassword(resetPasswordInput) {
        console.log(resetPasswordInput);
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async socialLogin(socialLoginDto) {
        console.log(socialLoginDto);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async otpLogin(otpLoginDto) {
        console.log(otpLoginDto);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async verifyOtpCode(verifyOtpInput) {
        console.log(verifyOtpInput);
        return {
            message: 'success',
            success: true,
        };
    }
    async sendOtpCode(otpInput) {
        console.log(otpInput);
        return {
            message: 'success',
            success: true,
            id: '1',
            provider: 'google',
            phone_number: '+919494949494',
            is_contact_exist: true,
        };
    }
    // async getUsers({ text, first, page }: GetUsersArgs): Promise<UserPaginator> {
    //   const startIndex = (page - 1) * first;
    //   const endIndex = page * first;
    //   let data: User[] = this.users;
    //   if (text?.replace(/%/g, '')) {
    //     data = fuse.search(text)?.map(({ item }) => item);
    //   }
    //   const results = data.slice(startIndex, endIndex);
    //   return {
    //     data: results,
    //     paginatorInfo: paginate(data.length, page, first, results.length),
    //   };
    // }
    // public getUser(getUserArgs: GetUserArgs): User {
    //   return this.users.find((user) => user.id === getUserArgs.id);
    // }
    me() {
        return this.users[0];
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
