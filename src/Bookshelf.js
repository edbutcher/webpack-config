class Bookshelf {
  static _shelf = [];
  static set shelf(book) {
    Bookshelf._shelf.push(book);
  }
  static get shelf() {
    return Bookshelf._shelf;
  }
  static read() {
    const generator = (function*() {
      let i = 0;
      while (Bookshelf.shelf.length > i) {
        yield Bookshelf.shelf[i++];
      }
    })();
    for (let iterator of generator) {
      for (let item of iterator) {
        console.log(item);
      }
    }
  }
}

export default Bookshelf;
