import { eatFunc } from '../components/eat';
import { playFunc } from '../components/play';
import { fightFunc } from '../components/fight';
import { sleepFunc } from '../components/sleep';

const buttonEvents = () => {
  document.querySelector('#goodFood').addEventListener('click', eatFunc);
  document.querySelector('#junkFood').addEventListener('click', eatFunc);
  document.querySelector('#bigFun').addEventListener('click', playFunc);
  document.querySelector('#smallFun').addEventListener('click', playFunc);
  document.querySelector('#run').addEventListener('click', fightFunc);
  document.querySelector('#violence').addEventListener('click', fightFunc);
  document.querySelector('#nap').addEventListener('click', sleepFunc);
  document.querySelector('#slumber').addEventListener('click', sleepFunc);
};

export default buttonEvents;
