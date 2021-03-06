const domBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id='main-container'>
                                                <div id='eatName' class='d-flex justify-content-center'>EAT</div>
                                                <hr>
                                                <div id='eatScore'>100</div>
                                                <hr>
                                                <div class='d-flex justify-content-around'>
                                                <button id='goodFood' class='btn btn-dark'>HEALTHY<br>+10</button>
                                                <button id='junkFood' class='btn btn-dark'>UNHEALTHY<br>-3</button>
                                                </div>
                                              </div>`;
  document.querySelector('#play').innerHTML = `<div id='main-container'>
                                                <div id='playTitle'>PLAY</div>
                                                <hr>
                                                <div id='playScore'>50</div>
                                                <hr>
                                                <div class='d-flex justify-content-around'>
                                                <button id='bigFun' class='btn btn-dark'>SUPER FUN!<br>+50</button>
                                                <button id='smallFun' class='btn btn-dark'>SLIGHTLY FUN<br>+2</button>
                                                </div>
                                              </div>`;
  document.querySelector('#fight').innerHTML = `<div id='main-container'>
                                                  <div id='fightTitle'>FIGHT</div>
                                                  <hr>
                                                  <div id='fightScore'>100</div>
                                                  <hr>
                                                  <div class='d-flex justify-content-around'>
                                                  <button id='run' class='btn btn-dark'>RUN AWAY<br>+1</button>
                                                  <button id='violence' class='btn btn-dark'>COMMIT VIOLENCE<br>-10</button>
                                                  </div>
                                                </div>`;
  document.querySelector('#sleep').innerHTML = `<div id='main-container'>
                                                  <div id='sleepTitle'>SLEEP</div>
                                                  <hr>
                                                  <div id='sleepScore'>50</div>
                                                  <hr>
                                                  <div class='d-flex justify-content-around'>
                                                  <button id='nap' class='btn btn-dark'>NAP<br>+50</button>
                                                  <button id='slumber' class='btn btn-dark'>DEEP SLUMBER<br>+60</button>
                                                  </div>
                                                </div>`;
};

export default domBuilder;
