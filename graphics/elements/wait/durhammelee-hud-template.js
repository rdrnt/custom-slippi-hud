import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

#overlay {
  top: 0px;
  left: 0px;
  background: url('./img/durham-melee/overlays/wait.png') no-repeat;
  height: 1080px;
  width: 1920px;
  position: absolute;
  font-family: 'Roboto', sans-serif;
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
  font-size: 26px;
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
  ${this.generalData.tournament.round}
  </div>


  <div class="comm_container" id="com0">${this.generalData.tournament.commentators[0].name}</div>
  <div class="comm_container" id="com1">${this.generalData.tournament.commentators[1].name}</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}
