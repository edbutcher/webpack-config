import PersonAbstract from './interfaces/IPerson.abstract';
import { IPerson } from './interfaces/IPerson.dto';

export class Person extends PersonAbstract {
  public getName(): string {
    return this.name;
  }
  public getHeight(): string {
    return this.height;
  }
  public getGender(): string {
    return this.gender;
  }
  public getInfo(): IPerson {
    return {
      name: this.name,
      height: this.height,
      mass: this.mass,
      hairColor: this.hairColor,
      skinColor: this.skinColor,
      eyeColor: this.eyeColor,
      birthYear: this.birthYear,
      gender: this.gender,
      homeWorld: this.homeWorld,
      url: this.url,
    };
  }
}
