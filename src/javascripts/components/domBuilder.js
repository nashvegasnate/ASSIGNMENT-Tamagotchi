const domBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id="main-container'>
                                                <div id="eatTitle">EAT</div>
                                                <hr>
                                                <div id="eatScore">100</div>
                                                <hr>
                                                <button id="healthy" class="btn btn-dark">HEALTHY<br>+10</button>
                                                <button id="junkFood" class="btn btn-dark">JUNK FOOD<br>-3</button>
                                              </div>`;
  document.querySelector('#play').innerHTML = `<div id="main-container'>
                                                <div id="playTitle">PLAY</div>
                                                <hr>
                                                <div id="playScore">50</div>
                                                <hr>
                                                <button id="superFun" class="btn btn-dark">SUPER FUN!<br>+50</button>
                                                <button id="slightlyFun" class="btn btn-dark">SLIGHTLY FUN<br>+2</button>
                                              </div>`;
  document.querySelector('#fight').innerHTML = `<div id="main-container'>
                                                  <div id="fightTitle">FIGHT</div>
                                                  <hr>
                                                  <div id="fightScore">100</div>
                                                  <hr>
                                                  <button id="runAway" class="btn btn-dark">RUN AWAY<br>+1</button>
                                                  <button id="violence" class="btn btn-dark">COMMIT VIOLENCE<br>-10</button>
                                                </div>`;
  document.querySelector('#sleep').innerHTML = `<div id="main-container'>
                                                  <div id="sleepTitle">SLEEP</div>
                                                  <hr>
                                                  <div id="sleepScore">50</div>
                                                  <hr>
                                                  <button id="nap" class="btn btn-dark">NAP<br>+50</button>
                                                  <button id="deepSlumber" class="btn btn-dark">DEEP SLUMBER<br>+60</button>
                                                </div>`;
};

export default domBuilder;
