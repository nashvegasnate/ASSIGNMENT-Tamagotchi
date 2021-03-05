import printToDom from './printToDom';

let energy = 50;

const sleepStart = () => {
  const domString = energy;
  printToDom('#sleepScore', domString);
};

const updateSleepScore = (newScore) => {
  energy = newScore;
};

const sleepFunc = (e) => {
  if (e.target.id.includes('nap')) {
    let domString = energy;
    const nap = domString + 50;
    if (nap > 100) {
      domString = 100;
      updateSleepScore(100);
    } else {
      domString = nap;
      updateSleepScore(nap);
    }
    printToDom('#sleepScore', domString);
  }
  if (e.target.id.includes('slumber')) {
    let domString = energy;
    const slumber = domString + 60;
    if (slumber > 100) {
      domString = 100;
      updateSleepScore(100);
    } else {
      domString = slumber;
      updateSleepScore(slumber);
    }
    printToDom('#sleepScore', domString);
  }
};

export { sleepStart, sleepFunc };
