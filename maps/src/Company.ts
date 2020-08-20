import faker from "faker";
import { Mappable } from "./CustomMap";

//for better error hints implements
export class Company implements Mappable {
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `<div><h1>Company ${this.companyName}</h1> </div>
   <div> <h3>${this.catchPhrase}</h3></div>    
    `;
  }
}
