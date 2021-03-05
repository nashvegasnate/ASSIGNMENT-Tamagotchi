import printToDom from './printToDom';

let strength = 100;

const fightStart = () => {
  const domString = strength;
  printToDom('#fightScore', domString);
};

const updateFightScore = (newScore) => {
  strength = newScore;
};

const fightFunc = (e) => {
  if (e.target.id.includes('run')) {
    let domString = strength;
    const run = domString + 1;
    if (run > 100) {
      domString = 100;
      updateFightScore(100);
    } else {
      domString = run;
      updateFightScore(run);
    }
    printToDom('#fightScore', domString);
  }
  if (e.target.id.includes('violence')) {
    let domString = strength;
    const violence = domString - 10;
    if (violence < 0) {
      domString = 0;
      updateFightScore(0);
    } else {
      domString = violence;
      updateFightScore(violence);
    }
    printToDom('#fightScore', domString);
  }
};

export { fightStart, fightFunc };
