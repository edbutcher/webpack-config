import './style.scss';

function component(tagName, content, className) {
  const element = document.createElement(tagName);

  element.innerHTML = content;
  element.classList.add(className);

  return element;
}

const HEADER = 'header';
const FOOTER = 'footer';

export default () => {
  document.body.appendChild(component(HEADER, HEADER, HEADER));
  document.body.appendChild(component(FOOTER, FOOTER, FOOTER));
};
