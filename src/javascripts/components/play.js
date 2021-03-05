import printToDom from './printToDom';

let fun = 50;

const funStart = () => {
  const domString = fun;
  printToDom('#playScore', domString);
};

const updatePlayScore = (newScore) => {
  fun = newScore;
};

const playFunc = (e) => {
  if (e.target.id.includes('bigFun')) {
    let domString = fun;
    const bigFun = domString + 50;
    if (bigFun > 100) {
      domString = 100;
      updatePlayScore(100);
    } else {
      domString = bigFun;
      updatePlayScore(bigFun);
    }
    printToDom('#playScore', domString);
  }
  if (e.target.id.includes('smallFun')) {
    let domString = fun;
    const smallFun = domString + 2;
    if (smallFun < 0) {
      domString = 0;
      updatePlayScore(0);
    } else {
      domString = smallFun;
      updatePlayScore(smallFun);
    }
    printToDom('#playScore', domString);
  }
};

export { funStart, playFunc };
