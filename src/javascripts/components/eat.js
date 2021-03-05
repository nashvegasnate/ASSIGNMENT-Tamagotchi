import printToDom from './printToDom';

let full = 100;

const eatStart = () => {
  const domString = full;
  printToDom('#eatScore', domString);
};

const updateEatScore = (newScore) => {
  full = newScore;
};

const eatFunc = (e) => {
  if (e.target.id.includes('goodFood')) {
    let domString = full;
    const healthy = domString + 10;
    if (healthy > 100) {
      domString = 100;
      updateEatScore(100);
    } else {
      domString = healthy;
      updateEatScore(healthy);
    }
    printToDom('#eatScore', domString);
  }
  if (e.target.id.includes('junkFood')) {
    let domString = full;
    const unhealthy = domString - 3;
    if (unhealthy < 0) {
      domString = 0;
      updateEatScore(0);
    } else {
      domString = unhealthy;
      updateEatScore(unhealthy);
    }
    printToDom('#eatScore', domString);
  }
};

export { eatStart, eatFunc };
