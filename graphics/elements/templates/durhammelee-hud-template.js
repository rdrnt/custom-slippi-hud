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

#BG {
	position: absolute;
	background: #082652;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	overflow: hidden;
  font-family: 'Inter', sans-serif;
  font-family: 'Roboto', sans-serif;
  z-indx: 0;
}
#HUD {
	position: absolute;
	background: url('./img/durham-melee/overlays/gameplay.png') 0px 0px no-repeat;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	overflow: hidden;
  z-index: 1;
  font-family: 'Inter', sans-serif;
  font-family: 'Roboto', sans-serif;
}


#FG {
	position: absolute;
	background: url('./img/pillar-box/overlay/FG.png') 0px 0px no-repeat;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
}
#P1P {
	position: absolute;
	background: url('./img/pillar-box/overlay/LP${this.playerData[0].slippi.port}.png') 0px 0px no-repeat;
	left: 0px;
	top: 489px;
	width: 304px;
	height: 521px;
}
#P2P {
	position: absolute;
	background: url('./img/pillar-box/overlay/RP${this.playerData[1].slippi.port}.png') 0px 0px no-repeat;
	left: 1617px;
	top: 488px;
	width: 303px;
	height: 522px;
}
#P1Sponsor {
	position: absolute;
	background: url('./img/sponsors/${this.playerData[0].player.sponsor}.png') 0px 0px no-repeat;
	left: 0px;
	top: 1013px;
	width: 1920px;
	height: 1080px;
}
#P2Sponsor {
	position: absolute;
	background: url('./img/sponsors/${this.playerData[1].player.sponsor}.png') 0px 0px no-repeat;
	left: 1856px;
	top: 1013px;
	width: 1920px;
	height: 1080px;
}
#P1Character {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
	left: 0px;
	top: 822px;
	width: 133px;
	height: 188px;
	transform: ScaleX(-1);
}
#P2Character {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
	left: 1787px;
	top: 822px;
	width: 133px;
	height: 188px;
}
#P1Name {
	position: absolute;
	top: 1010px;
    left: 64px;
    font-size: 30px;
    width: 239px;
    text-align: center;
}
#P2Name {
	position: absolute;
	top: 1010px;
    left: 1617px;
    font-size: 30px;
    width: 239px;
    text-align: center;
}
#Score-true {
	position: absolute;
	top: 949px;
    left: 259px;
    font-size: 60px;
    width: 44px;
    text-align: center;
}
#Score-false {
	position: absolute;
	top: 949px;
    left: 1617px;
    font-size: 60px;
    width: 44px;
    text-align: center;
}
#P1Tag {
	position: absolute;
	top: 1046px;
    left: 64px;
    font-size: 30px;
    width: 239px;
    text-align: center;

}
#P2Tag {
	position: absolute;
	top: 1046px;
    left: 1617px;
    font-size: 30px;
    width: 239px;
    text-align: center;

}
.port-1 {
	color: #ED3636;
    -webkit-text-stroke: thin black;
}

.port-2 {
	color: #4E4EE9;
    -webkit-text-stroke: thin black;
}

.port-3 {
	color: #FFDF1A;
    -webkit-text-stroke: thin black;
}

.port-4 {
	color: #4EB94E;
    -webkit-text-stroke: thin black;
}

.true {
	opacity: 1;
}

.false {
	opacity: 0;
}

#center_scoreboard {
  position: absolute;
  top: 15px;
  left: 1200px;
  border-radius: 3px;
  width: 240px;
  height: 80px;
  background-color: transparent;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
#center_scoreboard_round {
  font-size: 20px;
  width: 240px;
  height: 41px;
  font-weight: 600;
  line-height: 41px;
  letter-spacing: 2px;
}
#center_scoreboard_bestof {
  width: 240px;
  height: 41px;
  font-size: 22px;
  line-height: 41px;
  font-weight: 600;
  letter-spacing: 2px;
}

#scoreboard_bar {
  height: 70px;
  width: 1160px;
  border-radius: 15px;
  position: absolute;
  top: 20px;
  left: 740px;
}

.scoreboard_player_char {
  height: 65px;
  width: 80px;
  border-radius: 3px;
  background-color: white;
}

#scoreboard_player1_char {
  position: absolute;
  top: 0;
  left: 0;
  background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
  background-size: 90%;
  transform: scaleX(-1);
}

#scoreboard_player2_char {
  position: absolute;
  top: 0;
  right: 0;
  background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/portrait.png') 5px 0px no-repeat;
  background-size: 90%;
}

#scoreboard_player1_namebox {
  position: absolute;
  top: 0;
  left: 100px;
  padding-left: 25px;
  width: auto;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
#scoreboard_player2_namebox {
  position: absolute;
  top: 0;
  right: 100px;
  padding-right: 25px;
  width: auto;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
#scoreboard_player_name {
  color: white;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 2px;
}
#scoreboard_player_pronouns {
  color: white;
  letter-spacing: 2px;
}


.new_player_scorebox {
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 3px;
}
#new_player1_scorebox {
  top: 27px;
  left: 1173px;
}
#new_player2_scorebox {
  top: 27px;
  left: 1413px;
}
.scorebox_score {
  text-align: center;
  color: black;
  font-size: 40px;
  line-height: 55px;
  font-weight: 600;
}

#newbottomleftbox {
  position: absolute;
  top: 208px;
  left: 20px;
  width: 650px;
  height: 580px;
  background-image-color: red;
  padding: 25px;
}

#contentarea {
  position: absolute;
  top: 438px;
  left: 20px;
  width: 650px;
  height: 580px;
  border-radius: 15px;
  background-image: linear-gradient(270deg, #2E7BAC 0%, #01578E 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}

#bracket_text {
  position: absolute;
  top: 465px;
  left: 45px;
  width: 650px;
  height: 75px;
  border-radius: 10px;
  text-align: center;
  z-index: 1;
  background-color: transparent;

  line-height: 75px;
  font-size: 28px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#contentarea_linkbox {
  margin-bottom: 25px;
  position: absolute;
  bottom: 0;
  left: 25px;
  width: 650px;
  height: 75px;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 75px;
  letter-spacing: 2px;
  border-top: 2px solid white;
}

</style>

<div id="BG">
  <div id="HUD">

    <div id="scoreboard_bar">
      <div class="scoreboard_player_char" id="scoreboard_player1_char"></div>

      <div class="scoreboard_player_char" id="scoreboard_player2_char"></div>

      <div id="scoreboard_player1_namebox">
        <div id="scoreboard_player_name">${this.playerData[0].player.name}</div>
        <div id="scoreboard_player_pronouns">${this.playerData[0].player.pronouns}</div>
      </div>

      <div id="scoreboard_player2_namebox">
        <div id="scoreboard_player_name">${this.playerData[1].player.name}</div>
        <div id="scoreboard_player_pronouns">${this.playerData[1].player.pronouns}</div>
      </div>
    </div>


    <div id="center_scoreboard">
      <div id="center_scoreboard_round">BRACKET</div>
      <div id="center_scoreboard_bestof">
        Best of ${this.generalData.tournament.bestOf}
      </div>
    </div>
    <div>
      <div class="new_player_scorebox" id="new_player1_scorebox">
        <div class="scorebox_score">
          ${this.generalData.tournament.scores[0].score}</div>
        </div>
      </div>

      <div class="new_player_scorebox" id="new_player2_scorebox">
        <div class="scorebox_score">
          ${this.generalData.tournament.scores[1].score}
        </div>
      </div>
    </div>

    <div id="bracket_text">${this.generalData.tournament.round}</div>
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
