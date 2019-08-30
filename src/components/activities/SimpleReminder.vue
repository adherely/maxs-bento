<template>
<div class='container'>
  <div id='exit-btn' v-on:click='toggleModal()'>
    <img src='@/assets/exit-btn.svg' class='svg exit-btn'/>
  </div>
</div>
</template>

<script>
export default {
  name: 'SimpleReminderModal',
  methods: {
    toggleModal() {
      let btn = document.getElementById('exit-btn');
    }
  }
}
</script>

<style lang='scss'>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  height: 67vh;
  width: 91vw;
  background-color: white;
  border-radius: 10px;
  border: 1px solid red;
  transition: all 0.2s ease;
}

/* consistent size ratio */
@media (orientation: landscape) {
.container {
  height: 91vh;
  width: 67vw;
}
}
</style>
