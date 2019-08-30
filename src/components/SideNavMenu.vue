<template>
  <div>
    <div id='side-menu'>
    <p class='side-menu-temp-text'>BOO!</p>
    <div id="side-menu-btn" v-on:click='toggleSideMenu()'>
      <img src='@/assets/menu-btn.svg' class='svg'/>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavMenu',
  methods: {
    toggleSideMenu() {
      let btn = document.getElementById('side-menu-btn');
      let menu = document.getElementById('side-menu');
      var visible = menu.getAttribute(true);
      if (visible == 'true') {
        menu.setAttribute(true, 'false');
        menu.style.left = '-100%';
        btn.style.transform = 'rotate(0deg)';
        btn.style.left = '0.6vw';
      } else {
        menu.setAttribute(true, 'true');
        menu.style.left = '0%';
        btn.style.transform = 'rotate(180deg)';
        btn.style.left = '9.5rem';
      }
    }
  }
}
</script>

<style lang='scss'>
#side-menu {
  position: fixed;
  height: 100vh;
  width: 13rem;
  left: -100%;
  background-color: $lightgreen;
  z-index: 3;
  transition: all 0.3s ease;
}

.side-menu-temp-text {
  display: flex;
  margin-top: 50%;
  font-family: 'Varela Round';
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#side-menu-btn {
  height: auto;
  width: 3.5rem;
  top: 0.8rem;
  left: 0.6vw;
  transform: rotate(0deg);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  z-index: 3;
  transition: all 0.3s ease;
}

.svg {
  height: auto;
  width: 55%;
}
</style>
