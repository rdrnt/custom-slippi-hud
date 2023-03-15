import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>
#container {
	position: absolute;
	left: 0px;
	top: 0px;
	font-family: "metropolis black";
}
#overlay {
	position:absolute;
	left: 0px;
	top: 0px;
	background: url('./img/extras/old-hud/SetEnd.png') no-repeat 0px 0px;
	width: 1920px;
	height: 1080px;
}
#Title {
	position: absolute;
	top: 41px;
	
}
#LComm {
	position: absolute;
}
#RComm {
	position: absolute;
}
#score {
	position: absolute;
    text-align: center;
    font-size: 44px;
    top: 870px;
    left: 869px;
    width: 181px;
}

#LSponsor{
	position: absolute;
	left: 144px;
}
#RSponsor{
	position: absolute;
	left: 1505px;
}
#LPort {
	position: absolute;
	left: 109px;
}
#LChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/stats.png') no-repeat 0px 0px;
	top: 179px;
	width: 333px;
	height: 547px;
	left: 113px;
}
#RChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/stats.png') no-repeat 0px 0px;
	top: 179px;
	width: 333px;
	height: 547px;
	left: 1475px;
	transform: ScaleX(-1);
}
#RPort {
	position: absolute;
	left: 1470px;
}
#Index-${this.playerData[0].slippi.id}-Data{
	Postion: absolute;
	
}
#Index-${this.playerData[1].slippi.id}-Data{
	Postion: absolute;
	
}
#Index-${this.playerData[0].slippi.id}-Stats{
position: absolute;
    top: 222px;
    left: 531px;
	width: 156px;
    font-size: 21px;
    text-align: center;
}
#Index-${this.playerData[1].slippi.id}-Stats{
	position: absolute;
    top: 222px;
    left: 1246px;
	width: 156px;
    font-size: 21px;
    text-align: center;
}
#statLabel{
	position: absolute;
    top: 222px;
    left: 749px;
    width: 422px;
    height: 800px;
    color: white;
    font-size: 21px;
}
#Stat1 {
	padding-top: 6px;
}
#Stat2 {
	padding-top: 35px;
	
}
#Stat3 {
	padding-top: 68px;
	
}
#Stat4 {
	padding-top: 48px;
	
}
#Stat5 {
	padding-top: 49px;
	
}
#Stat6 {
	padding-top: 50px;
	
}
#LName {
	position: absolute;
    left: 109px;
}
#RName {
	position: absolute;
	left: 1470px;
}
#History {
	position: absolute;
	top: 741px;
	width: 1019px;
	left: 451px;
}
#g1-1 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 413px;
}
#g1-2 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 281px;
}
#g1-3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 16px;
}
#g1-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 16px;
}
#g1-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 16px;
}
#g2-2 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 545px;
}
#g2-3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 413px;
}
#g2-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 281px;
}
#g2-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 215px;
}
#g3-3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 810px;
}
#g3-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 545px;
}
#g3-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 413px;
}
#g4-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 810px;
}
#g4-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 612px;
}
#g5-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 810px;
}
#char-${this.playerData[0].slippi.id} {
	position: absolute;
	top: 10px;
	width: 72px;
	height: 72px;
	left: 0px;
	transform: scale(.5);
}
#char-${this.playerData[1].slippi.id} {
	position: absolute;
	top: 10px;
	width: 72px;
	height: 72px;
	right: 0px;
	transform: scale(.5);
}
#time {
	top: 3px;
	position: absolute;
	width: 192px;
}
.winner{
	opacity: 1;
}
.loser {
	opacity: .6;
}
.title {
    color: white;
    font-size: 25px;
    text-align: center;
    width: 1920px;
	padding-top: 10px;
}
.name {
	font-size: 30px;
	top: 678px;
	width: 337px;
    text-align: center;
}
.sponsor {
	color: black;
	font-size: 25px;
	top: 722px;
	width: 272px;
    text-align: center;
	padding-top: 4px;
}
.data {
	position: absolute;
	
}
.stat {
	color: white;
	
	
}
.port-1 {
	background: url('./img/extras/old-hud/port1.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;
}
.port-2 {
	background: url('./img/extras/old-hud/port2.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-3 {
	background: url('./img/extras/old-hud/port3.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-4 {
	background: url('./img/extras/old-hud/port4.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.label {
	text-align: center;
}
.label2 {
	text-align: center;
	color: black;
}
.label3 {
	color: white;
    -webkit-text-stroke: medium black;
	text-align: center;
	font-size: 30px;
}
.stage-2 {
	background: url('./img/Stages/2-small.png') 0px 0px;
}
.stage-3 {
	background: url('./img/Stages/3-small.png') 0px 0px;
}
.stage-8 {
	background: url('./img/Stages/8-small.png') 0px 0px;
}
.stage-28 {
	background: url('./img/Stages/28-small.png') 0px 0px;
}
.stage-31 {
	background: url('./img/Stages/31-small.png') 0px 0px;
}
.stage-32 {
	background: url('./img/Stages/32-small.png') 0px 0px;
}
.frame {
	background: url('./img/extras/old-hud/frame.png') 0px 0px no-repeat;
}
#t1 {
	width: 200px;
	height: 200px;
	text-align: center;
}

</style>
<div id="container">
	<div id="overlay"></div>
	<div id="History">
		<div id="g1-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g1.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g1.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g1.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g1.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g1.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g1.split(",")[1]}</div></div>
		<div id="g1-${this.statData.latestSet.gt}" class="frame"></div>
		<!-- Splitting an array that does not exist causes page to not render, need to make sure array exists before splitting --> 
		${this.statData.latestSet.gt>1
		? html `<div id="g2-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g2.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g2.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g2.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g2.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g2.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g2.split(",")[1]}</div></div>
		<div id="g2-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}
		${this.statData.latestSet.gt>2
		? html `<div id="g3-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g3.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g3.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g3.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g3.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g3.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g3.split(",")[1]}</div></div>
		<div id="g3-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}	
		${this.statData.latestSet.gt>3
		? html `<div id="g4-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g4.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g4.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g4.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g4.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g4.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g4.split(",")[1]}</div></div>
		<div id="g4-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}
		${this.statData.latestSet.gt>4
		? html `<div id="g5-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g5.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g5.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g5.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g5.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g5.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g5.split(",")[1]}</div></div>
		<div id="g5-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}
	</div>
	<div>
		<div id="LChar"></div>
		<div id="RChar"></div>
		<div id="LPort" class="port-${this.playerData[0].slippi.port}"></div>
		<div id="RPort" class="port-${this.playerData[1].slippi.port}"></div>
		<div id="Title">
		<div id="tournament" class="title">${this.generalData.tournament.name}</div>
		<div id="round" class="title">${this.generalData.tournament.round}</div>
		<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf} - Set Stats</div>
		</div>
	</div>

	<div id="LName" class="name">${this.playerData[0].player.name}</div>
	<div id="LSponsor" class="sponsor">${this.playerData[0].player.sponsor}</div>


	<div id="RName" class="name">${this.playerData[1].player.name}</div>
	<div id="RSponsor" class="sponsor">${this.playerData[1].player.sponsor}</div>

	<div id="score">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}-${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</div>

	<div id="Index-0-Stats">
		<div id="Stat1" class="stat">${this.statData.latestSet.mcno1}</div>
		<div id="Stat2" class="stat">${this.statData.latestSet.mckm1}</div>
		<div id="Stat3" class="stat">${this.statData.latestSet.ek1}</div>
		<div id="Stat4" class="stat">${this.statData.latestSet.opk1}</div>
		<div id="Stat5" class="stat">${this.statData.latestSet.nw1}</div>
		<div id="Stat6" class="stat">${this.statData.latestSet.lc1}</div>
	</div>

	<div id="Index-1-Stats">
		<div id="Stat1" class="stat">${this.statData.latestSet.mcno2}</div>
		<div id="Stat2" class="stat">${this.statData.latestSet.mckm2}</div>
		<div id="Stat3" class="stat">${this.statData.latestSet.ek2}</div>
		<div id="Stat4" class="stat">${this.statData.latestSet.opk2}</div>
		<div id="Stat5" class="stat">${this.statData.latestSet.nw2}</div>
		<div id="Stat6" class="stat">${this.statData.latestSet.lc2}</div>
	</div>
	<div id="statLabel">
		<div id="Stat1" class="label2">Neutral Openers</div>
		<div id="Stat2" class="label2">Kill Moves</div>
		<div id="Stat3" class="label">Early Kills</div>
		<div id="Stat4" class="label">Openings/Kill</div>
		<div id="Stat5" class="label">Neutral Wins</div>
		<div id="Stat6" class="label">L-Cancel %</div>
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
