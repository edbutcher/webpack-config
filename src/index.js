import Http from './request';
import Book from './Book';

import './style.scss';
import Bookshelf from './Bookshelf';

const component = (tagName, content, className) => {
  const elementDOM = document.createElement(tagName);
  elementDOM.innerHTML = content;
  elementDOM.classList.add(className);
  return elementDOM;
};

const MAIN = 'main';
document.body.appendChild(component(MAIN, MAIN, MAIN));

const getData = async url => {
  const answer = JSON.parse(await Http.get(url));
  console.log(answer);

  if (answer.next) {
    getData(answer.next);
  } else {
    console.log('End');
  }
};

getData('https://swapi.co/api/people');

const wars = new Book('Jon', 20);
console.log(wars.story());

for (const val of wars) {
  console.log(val);
}

const bookshelf = new Bookshelf();

bookshelf.pushBook(new Book('Eragorn', 200));
bookshelf.pushBook(new Book('Emma', 19));
bookshelf.pushBook(new Book('Ed', 22));
bookshelf.pushBook(new Book('Butcher', 24));

bookshelf.read();
