<template>
<div class='modal-container'>
  <div id='exit-btn'>
    <img src='@/assets/exit-btn.svg' class='svg exit-btn'/>
  </div>
</div>
</template>

<script>
export default {
  name: 'SimpleReminder',

}
</script>

<style lang='scss'>
.modal-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  height: 67vh;
  width: 91vw;
  background-color: $white;
  border-radius: 10px;
  border: 1px solid red;
  transition: all 0.2s ease;
	display: none;
}

/* consistent size ratio */
@media (orientation: landscape) {
.modal-container {
  height: 91vh;
  width: 67vw;
}
}
</style>
