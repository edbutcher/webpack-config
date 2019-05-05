import Http from './request';
import './style.scss';

const component = (
  tagName: string,
  content: string,
  className: string
): HTMLElement => {
  const elementDOM = document.createElement(tagName);
  elementDOM.innerHTML = content;
  elementDOM.classList.add(className);
  return elementDOM;
};

const MAIN = 'main';
document.body.appendChild(component(MAIN, MAIN, MAIN));

async function getData(url: string): Promise<void> {
  const answer = await Http.get(url);
  console.log(answer);
  if (answer.next) {
    getData(answer.next);
  } else {
    console.log('End');
  }
}

getData('https://swapi.co/api/planets/');
