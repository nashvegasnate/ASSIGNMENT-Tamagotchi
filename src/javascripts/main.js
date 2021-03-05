import domBuilder from './components/domBuilder';
import domEvents from './helpers/domEvents';
import '../styles/main.scss';
import buttonEvents from './helpers/buttonEvents';

const init = () => {
  domEvents();
  domBuilder();
  buttonEvents();
};

init();
