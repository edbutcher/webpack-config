class Bookshelf {
  constructor() {
    this.shelf = [];
  }
  pushBook(book) {
    this.shelf.push(book);
  }
  *generate() {
    let i = 0;
    while (this.shelf.length > i) {
      yield this.shelf[i++];
    }
  }
  read() {
    const generator = this.generate();
    for (let iterator of generator) {
      for (let item of iterator) {
        console.log(item);
      }
    }
  }
}

export default Bookshelf;
