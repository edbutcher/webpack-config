import module from './subIndex';
import './style.scss';

function component(tagName: string, content: string, className: string): any {
  const element = document.createElement(tagName);

  element.innerHTML = content;
  element.classList.add(className);

  return element;
}

const HEADER = 'header';
const MAIN = 'main';

document.body.appendChild(component(HEADER, HEADER, HEADER));
document.body.appendChild(component(MAIN, MAIN, MAIN));
module();
