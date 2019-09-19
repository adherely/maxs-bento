<template>
<div class='modal-container'>
	<div class='btn-shadow'></div>
	<img src='@/assets/exit-btn.svg' class='exit-btn btn-shadow'/>
	<img src='@/assets/back-btn.svg' class='back-btn btn-shadow'>
</div>
</template>

<script>
export default { name: 'SimpleReminder' }
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
  border: none;
  transition: all 0.2s ease;
	//display: none;
}
</style>
