import { IPerson } from './IPerson.dto';

abstract class PersonAbstract implements IPerson {
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
  protected constructor(
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
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hairColor = hairColor;
    this.skinColor = skinColor;
    this.eyeColor = eyeColor;
    this.birthYear = birthYear;
    this.gender = gender;
    this.homeWorld = homeWorld;
    this.url = url;
  }
  public getName(): void {}
  public getHeight(): void {}
  public getGender(): void {}
  public getInfo(): void {}
}

export default PersonAbstract;
