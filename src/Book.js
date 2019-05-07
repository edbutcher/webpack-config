import Bookshelf from './Bookshelf';

class Book {
  constructor(name = 'Unknown', age = 0) {
    this.name = name;
    this.age = age;
    Bookshelf.shelf = this;
  }
  story() {
    return `${
      this.name
    } gained a number of superhuman powers as a result of the mutagenic effects of the cosmic radiation. ${
      this.name
    } primary ability to envelop the body in fiery plasma, in which form ${
      this.name
    } is able to fly by providing thrust flame, and to generate powerful streams and/or balls of flame. ${
      this.name
    } has the ability to control any fire, causing it to increase or decrease in intensity or to move in a pattern directed. Now ${
      this.name
    } is ${this.age} and the Project is hunting ${this.name}.`;
  }
  [Symbol.iterator]() {
    return this.story()
      .split('. ')
      .values();
  }
}

export default Book;
