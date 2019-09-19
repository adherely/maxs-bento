<template>
  <div id="app" class='app-container'>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,
				viewport-fit=cover">
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)">
    </apple-add-to-home-screen-modal>
    <!-- <nav-bar></nav-bar> -->
    <!-- <div class="main-wrapper"> <router-view /> </div> -->
    <SideNavMenu />
    <div class='header-background'>
      <h1 class='title'>Adhere.ly</h1>
			<!--<div class='switch-container'>
				<div class='btn-container'>
					<span class='btn-text'>Adult</span>
					<input type='checkbox' id='toggle' class='checkbox'/>
					<label for='toggle' class='switch'></label>
					<span class='btn-text btn-text-margin'>Child</span>
				</div>
			</div> -->
    </div>
    <div class='main-view'>
      <CardGridContainer />
      <SimpleReminder />
    </div>
    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import SideNavMenu from '@/components/SideNavMenu.vue'
import CardGridContainer from '@/components/CardGridContainer.vue'
import SimpleReminder from '@/components/activities/SimpleReminder.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal, SideNavMenu, CardGridContainer, SimpleReminder },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
.app-container {
	height: 100vh;
	width: 100vw;
	position: fixed;
}

.header-background {
  text-align: center;
  width: 100%;
  height: 3.6rem;
}

.switch-container {
	position: absolute;
	top: 6%;
  left: 90%;
  transform: translate(-50%, -50%);
}

.switch {
	position: relative;
	left: -40%;
}

.switch::after {
	content: '';
	position: absolute;
	width: 2.4em;
	height: 1.1em;
	border-radius: 30px;
	border: 1px solid $lightgreen;
	top: 15%;
	left: 1px; // important?
	transition: all 0.3s;
	background-color: white;
}

.checkbox {
	position: absolute;
	transform: scale(15);
	opacity: 0;

}

.checkbox:checked + .switch::after {
	left: 2.63em;
}

.checkbox:checked + .switch {

}

.btn-container {
	height: 1.5em;
	width: 5.3em;
	border-radius: 30px;
	background-color: $lightgreen;
}

.btn-text {
	position: relative;
	top: 7%;
	font-family: 'Varela Round';
	color: $darkgreen;
	font-size: 22px;
	z-index: 1;
}

.btn-text-margin {
	margin-left: 18%;
}

.title {
  font-size: 1.7rem;
  font-family: 'Pacifico';
  color: $darkgreen;
  line-height: 3.4rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
	overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
  font-size: calc(13px + 1vw);
}

.main-view {
	background-color: $lightgreen;
  height: 100vh;
  width: 100%;
}
</style>
