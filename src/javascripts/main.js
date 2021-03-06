import domBuilder from './components/domBuilder';
import domEvents from './helpers/domEvents';
import '../styles/main.scss';
import buttonEvents from './helpers/buttonEvents';
import '../styles/eat.scss';
import '../styles/play.scss';
import '../styles/fight.scss';
import '../styles/sleep.scss';

const init = () => {
  domEvents();
  domBuilder();
  buttonEvents();
};

init();
