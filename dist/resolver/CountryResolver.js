"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryResolver = exports.CreateCountryInput = void 0;
const type_graphql_1 = require("type-graphql");
const Country_1 = require("../entities/Country");
let CreateCountryInput = class CreateCountryInput {
};
exports.CreateCountryInput = CreateCountryInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCountryInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCountryInput.prototype, "emoji", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCountryInput.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCountryInput.prototype, "continent", void 0);
exports.CreateCountryInput = CreateCountryInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateCountryInput);
let CountryResolver = class CountryResolver {
    async getCountry() {
        const countries = await Country_1.Country.find();
        return countries;
    }
    async getCountryByCode(code) {
        const country = await Country_1.Country.findOne({ where: { code: code } });
        return country;
    }
    async getCountryByContinent(continent) {
        const country = await Country_1.Country.find({ where: { continent: continent } });
        return country;
    }
    async addCountry(data) {
        let country = new Country_1.Country();
        country = Object.assign(country, data);
        await country.save();
        return country;
    }
};
exports.CountryResolver = CountryResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Country_1.Country]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "getCountry", null);
__decorate([
    (0, type_graphql_1.Query)(() => Country_1.Country),
    __param(0, (0, type_graphql_1.Arg)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "getCountryByCode", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Country_1.Country]),
    __param(0, (0, type_graphql_1.Arg)("continent")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "getCountryByContinent", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Country_1.Country),
    __param(0, (0, type_graphql_1.Arg)("data", () => CreateCountryInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCountryInput]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "addCountry", null);
exports.CountryResolver = CountryResolver = __decorate([
    (0, type_graphql_1.Resolver)(Country_1.Country)
], CountryResolver);
