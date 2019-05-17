class Bookshelf {
  constructor() {
    this.shelf = [];
  }
  pushBook(book) {
    this.shelf.push(book);
  }
  *generate() {
    for (const book of this.shelf) {
      yield book;
    }
  }
  read() {
    const shelf = this.generate();
    Array.from(shelf).forEach(book =>
      Array.from(book).forEach(sentence => console.log(sentence))
    );
  }
}

export default Bookshelf;
