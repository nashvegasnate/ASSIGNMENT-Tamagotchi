import domEvents from './helpers/domEvents';
import domBuilder from './components/domBuilder';
import '../styles/main.scss';

const init = () => {
  domEvents();
  domBuilder();
};

init();
