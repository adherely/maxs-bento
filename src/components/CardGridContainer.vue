<template>
<div>
  <div class='card-container'>
    <div class='card' v-on:click='toggleModal()'>
      <div class='card-preview-circle card-1'></div>
      <p class='card-preview-text'>Simple<br>reminder</p>
    </div>
    <div class='card'>
      <div class='card-preview-circle card-2'></div>
      <p class='card-preview-text'>Simple<br>message</p>
    </div>
    <div class='card'>
      <div class='card-preview-circle card-3'></div>
      <p class='card-preview-text'>Self-monitoring</p>
    </div>
    <div class='card'>
      <div class='card-preview-circle card-4'></div>
      <p class='card-preview-text'>Relaxation</p>
    </div>
    <div class='card'></div>
    <div class='card'></div>
    <div class='card'></div>
    <div class='card'></div>
    <div class='card'></div>
    <div class='card'></div>
  </div>
</div>
</template>

<script>
export default {
	name: 'CardGridContainer',
	methods: {
    toggleModal() {
      let btn = document.getElementById('exit-btn');
			let modal = document.querySelector('modal-container');
			var visibility = modal.getAttribute(true);
			if (visibility == 'true') {
				modal.setAttribute(true, 'false');
				modal.style.top = '-50%';
			} else {
				modal.setAttribute(true, 'true');
				modal.style.top = '50%';
			}
    }
	}
}
</script>

<style lang='scss'>
.card-container {
  overflow: auto;
  width: 100%;
  height: 86.5vh;
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  padding-top: 0.3em;
}

.card {
 height: 13.5em;
 width: 10em;
 display: flex;
 flex-direction: column;
 align-items: center;
 border-radius: 10px;
 border: none;
 background-color: white;
 transition: 0.1s ease-in;
 transform: scale(1);
}

.card:active {
 box-shadow: 0px 5px 9px rgba(38, 38, 38, 0.2);
 border: 1px solid lightblue;
 -webkit-transition: all 0.10s ease-out;
 -moz-transition: all 0.10s ease-out;
 -ms-transition: all 0.10s ease-out;
 -o-transition: all 0.10s ease-out;
 transition: all 0.10s ease-out;
 transition: 0.1s ease-in;
 transform: scale(1.01);
}

.card-preview-circle {
  margin-top: 15%;
  height: 5.9em;
  width: 7.9em;
  border-radius: 50%;
  background-color: $lightgreen;
}

.card-1 { border: 1px solid #DED8A8; }
.card-2 { border: 1px solid #91B3B4; }
.card-3 { border: 1px solid #9BBF8F; }
.card-4 { border: 1px solid #968BB9; }

.card-preview-text {
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: $darkgreen;
  font-family: 'Varela Round';
  font-size: 110%;
  line-height: 1.3em;
}

/* smartphones */
@media only screen and (min-device-width: 300px) and (max-device-width: 1023px) and (orientation: landscape) {
 .card-container {
  height: 70vh;
  grid-template-columns: repeat(3, 0fr);
 }
.card {
  height: 13em;
}
}

/* iPhone 5/5s/SE */
@media all and (device-width: 320px) and (device-height: 568px) and (orientation: portrait) {
.card-container {
  height: 84vh;
}
.card {
  height: 12em;
  width: 9em;
}
}
@media all and (device-width: 568px) and (device-height: 320px) and (orientation: landscape) {
.card {
  height: 12em;
  width: 9.5em;
}
}

/* tall smartphones */
@media only screen and (min-device-height: 812px) and (max-device-height: 840px) and (orientation: portrait) {
.card {
  height: 14em;
}
}
@media only screen and (min-device-width: 665px) and (max-device-width: 840px) and (orientation: landscape) {
.card {
  height: 68vh;
}
}

/* iPad */
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
 .card-container {
  height: 90vh;
  grid-template-columns: repeat(2, 0fr);
 }
}

/* iPad / Desktop */
@media all and (min-width: 630px) and (min-height: 400px) {
.card-container {
  grid-template-columns: repeat(3, 0fr);
}
}

@media all and (min-width: 1100px) {
.card-container {
  height: 80.5vh;
  grid-template-columns: repeat(4, 0fr);
}
}
</style>
