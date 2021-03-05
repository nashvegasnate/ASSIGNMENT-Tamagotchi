import domBuilder from './components/domBuilder';
import domEvents from './helpers/domEvents';
import '../styles/main.scss';

const init = () => {
  domEvents();
  domBuilder();
};

init();
