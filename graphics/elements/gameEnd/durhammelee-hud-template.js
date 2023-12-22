import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

#overlay {
  top: 0px;
  left: 0px;
  background: url(./img/durham-melee/overlays/gameEnd.png) no-repeat;
  height: 1080px;
  width: 1920px;
  position: absolute;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

#tournament {
  font-size: 35px;
  font-weight: 600;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#startgglink {
  padding-top: 10px;
  font-size: 23px;
  font-weight: 400;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#round {
  font-size: 30px;
  font-weight: 500;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#best {
  padding-top: 25px;
  color: white;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
}


#player0 {
    position: absolute;
    left: 208px;
    top: 1026px;
    width: 260px;
    text-align: center;
}

#sponsor0 {
    position: absolute;
	left: 10px;
	top: 20px;	
}

#score0 {
    position: absolute;
    left: 356px;
    top: 975px;
    font-size: 42px;
    text-align: center;
    width: 60px;
}

#player1 {
    position: absolute;
    left: 604px;
    top: 1026px;
    width: 260px;
    text-align: center;
}

#score1 {
position: absolute;
    left: 418px;
    top: 975px;
    font-size: 42px;
    text-align: center;
    width: 60px;
}

#sponsor{
	font-size: 22px;
}
#player {
	font-size: 32px;
	}

#dmlogo {
  position: absolute;
  top: 125px;
  left: 160px;
  background: url(./img/extras/durhammeleehud/dmlogo150.png) 0px 0px no-repeat;
  height: 150px;
  width: 150px;
}

#leftbox {
  position: absolute;
  left: 15px;
  top: 300px;
  text-align: center;
  width: 450px;
  font-size: 42px;
}

#rightbox {
  position: absolute;
  right: 10px;
  top: 250px;
  text-align: center;
  width: 450px;
  font-size: 42px;
}

#new_leftbox {
  width: 350px;
  height: 130px;
  background-color: transparent;
  position: absolute;
  top: 928px;
  left: 125px;
  z-index: 1;

  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 23px;
  line-height: 130px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

#new_bar {
  width: 1000px;
  height: 110px;
  background-color: transparent;
  position: absolute;
  top: 938px;
  left: 525px;
  z-index: 1;

  color: white;
  font-weight: 400;
  font-size: 48px;
  line-height: 110px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#bar_top {
  height: 60px;
  width: 100%;
  background-color: transparent;

  color: white;
  font-weight: 600;
  font-size: 32px;
  line-height: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid white;
}
#bar_bottom {
  height: 50px;
  width: 100%;
  background-color: transparent;

  color: white;
  font-weight: 400;
  font-size: 22px;
  line-height: 50px;
  letter-spacing: 1px;
  text-transform: none;
}

.comm_container {
  position: absolute;
  top: 785px;

  width: 350px;
  height: 85px;
  background-color: transparent;

  color: white;
  font-weight: 600;
  font-size: 38px;
  line-height: 85px;
  letter-spacing: 2px;
  text-align: center;
}

#com0 {
  left: 253px;
}

#com1 {
  left: 1317px;
}

</style>

<div id="overlay">
  <div id="new_leftbox">
    ${this.generalData.tournament.name}
  </div>

  <div id="new_bar">
   <div id="bar_top">
    ${this.playerData[0].player.name} VS ${this.playerData[1].player.name}
   </div>
   <div id="bar_bottom">
    ${this.generalData.tournament.round} (BO${this.generalData.tournament.bestOf})
   </div>
  </div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}
