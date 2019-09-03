<template>
<div class='modal-container'>
		<img src='@/assets/exit-btn.svg' class='svg exit-btn'/>
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
  border: 1px solid red;
  transition: all 0.2s ease;
	//display: none;
}

.exit-btn:active {
	background-color: $lightgrey;
	border-radius: 50%;
	transform: scale(1.05);
}
</style>
