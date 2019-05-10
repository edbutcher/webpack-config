import PersonAbstract from './interfaces/IPerson.abstract';
import { IPerson } from './interfaces/IPerson.dto';

export class Person extends PersonAbstract {
  public name: string;
  public height: string;
  public mass: string;
  public hairColor: string;
  public skinColor: string;
  public eyeColor: string;
  public birthYear: string;
  public gender: string;
  public homeWorld: string;
  public url: string;
  public constructor(
    name: string,
    height: string,
    mass: string,
    hairColor: string,
    skinColor: string,
    eyeColor: string,
    birthYear: string,
    gender: string,
    homeWorld: string,
    url: string
  ) {
    super(
      name,
      height,
      mass,
      hairColor,
      skinColor,
      eyeColor,
      birthYear,
      gender,
      homeWorld,
      url
    );
  }
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
