import { faker } from '@faker-js/faker';

export class RandomDataUtil{

static getFirstName()
{
    return faker.person.firstName();

}

static getlastName()
{
    return faker.person.lastName();
    
}


static getFullName()
{
    return faker.person.fullName();
    
}

static getEmail()
{
    return faker.internet.email();

}

static getPhoneNumber()
{
    return faker.phone.number();

}

 static getUsername(): string {
    return faker.internet.username();

  }

  static getPassword(): string {
    return faker.internet.password();
 }

 
  static getRandomCountry(): string {
    return faker.location.country();
  }

  
    static getRandomState(): string {
    return faker.location.state();
  }

  static getRandomCity(): string {
    return faker.location.city();
  }

 static getRandomPin(): string {
    return faker.location.zipCode();
  }

    
 static getRandomAddress(): string {
    return faker.location.streetAddress();
  }
  
  static getRandomPassword(length: number = 10): string {
    return faker.internet.password({ length });
  }

  static getRandomAlphanumeric(length: number): string {
    return faker.string.alphanumeric(length);
  }

  static getRandomNumeric(length: number): string {
    return faker.string.numeric(length);
  }

  static getRandomUUID(): string {
    return faker.string.uuid();
  }


}