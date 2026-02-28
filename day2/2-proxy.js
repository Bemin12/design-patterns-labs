class Country {
  constructor(name) {
    this.name = name;
  }

  getCountry() {
    console.log(`Get ${this.name}`);
  }
}

class CountryProxy {
  constructor() {
    this.countryCache = {};
  }

  getCountry(name) {
    let country = this.countryCache[name];
    if (!country) {
      country = new Country(name);
      this.countryCache[name] = country;
      console.log(`Cached ${name}`);
    } else console.log(`Got ${name} from cache`);
    return country.getCountry();
  }
}

const proxy = new CountryProxy();

proxy.getCountry('Egypt');
console.log('-------------------');

proxy.getCountry('Egypt');
console.log('-------------------');

proxy.getCountry('Japan');
