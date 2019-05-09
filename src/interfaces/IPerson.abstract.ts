import { IPerson } from "./IPerson.dto";

abstract class PersonAbstract implements IPerson {
  constructor(
    public name: string,
    public height: string,
    public mass: string,
    public hairColor: string,
    public skinColor: string,
    public eyeColor: string,
    public birthYear: string,
    public gender: string,
    public homeworld:string,
    public url: string,
  ) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hairColor = hairColor;
    this.skinColor = skinColor;
    this.eyeColor = eyeColor;
    this.birthYear = birthYear;
    this.gender = gender;
    this.homeworld = homeworld;
    this.url = url;
  }
	getName() {}
  getHeight() {}
  getGender() {}
  getInfo() {}
}

export default PersonAbstract;