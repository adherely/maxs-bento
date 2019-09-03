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

}

.header-background {
  text-align: center;
  width: 100%;
  height: 3.6rem;
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
  font-size: calc(12px + 1vw);
}

.main-view {
	background-color: $white;
  height: 100vh;
  width: 100%;
}
</style>
