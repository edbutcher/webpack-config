import PersonAbstract from "./interfaces/IPerson.abstract";

export class Person extends PersonAbstract {
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
    super(
      name = '',
      height = '',
      mass = '',
      hairColor = '',
      skinColor = '',
      eyeColor = '',
      birthYear = '',
      gender = '',
      homeworld = '',
      url = '',
    );
  }
  getName() {
    return this.name;
  }
  getHeight() {
    return this.height;
  }
  getGender() {
    return this.gender;
  }
  getInfo() {
    return {
      name: this.name,
      height: this.height,
      mass: this.mass,
      hairColor: this.hairColor,
      skinColor: this.skinColor,
      eyeColor: this.eyeColor,
      birthYear: this.birthYear,
      gender: this.gender,
      homeworld: this.homeworld,
      url: this.url,
    };
  }
}
