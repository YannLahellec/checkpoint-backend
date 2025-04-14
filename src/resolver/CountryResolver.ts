import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";

@InputType()
export class CreateCountryInput {
  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  code!: string;

  @Field()
  continent!: string;
}

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getCountry() {
    const countries = await Country.find();
    return countries;
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    const country = await Country.findOne({ where: { code: code } });
    return country;
  }

  @Query(() => [Country])
  async getCountryByContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    const country = await Country.find({ where: { continent: continent } });
    return country;
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("data", () => CreateCountryInput) data: CreateCountryInput
  ) {
    let country = new Country();
    country = Object.assign(country, data);
    await country.save();
    return country;
  }
}
