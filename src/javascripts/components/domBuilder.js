const domBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div id='main-container'>
                                                <div id='eatTitle' class='d-flex justify-content-center'>EAT</div>
                                                <hr>
                                                <div id='eatScore' class='d-flex justify-content-center'>100</div>
                                                <hr>
                                                <div class='d-flex justify-content-around'>
                                                <button id='goodFood' class='btn btn-dark'>HEALTHY<br>+10</button>
                                                <button id='junkFood' class='btn btn-dark'>UNHEALTHY<br>-3</button>
                                                </div>                                                
                                              </div>`;
  document.querySelector('#play').innerHTML = `<div id='main-container'>
                                                <div id='playTitle' class='d-flex justify-content-center'>PLAY</div>
                                                <hr>
                                                <div id='playScore' class='d-flex justify-content-center'>50</div>
                                                <hr>
                                                <div class='d-flex justify-content-around'>
                                                <button id='bigFun' class='btn btn-dark'>SUPER FUN!<br>+50</button>
                                                <button id='smallFun' class='btn btn-dark'>SLIGHTLY FUN<br>+2</button>
                                                </div>
                                              </div>`;
  document.querySelector('#fight').innerHTML = `<div id='main-container'>
                                                  <div id='fightTitle' class='d-flex justify-content-center'>FIGHT</div>
                                                  <hr>
                                                  <div id='fightScore' class='d-flex justify-content-center'>100</div>
                                                  <hr>
                                                  <div class='d-flex justify-content-around'>
                                                  <button id='run' class='btn btn-dark'>RUN AWAY<br>+1</button>
                                                  <button id='violence' class='btn btn-dark'>COMMIT VIOLENCE<br>-10</button>
                                                  </div>
                                                </div>`;
  document.querySelector('#sleep').innerHTML = `<div id='main-container'>
                                                  <div id='sleepTitle' class='d-flex justify-content-center'>SLEEP</div>
                                                  <hr>
                                                  <div id='sleepScore' class='text-center'>50</div>
                                                  <hr>
                                                  <div class='d-flex justify-content-around'>
                                                  <button id='nap' class='btn btn-dark'>NAP<br>+50</button>
                                                  <button id='slumber' class='btn btn-dark'>DEEP SLUMBER<br>+60</button>
                                                  </div>
                                                </div>`;
};

export default domBuilder;
