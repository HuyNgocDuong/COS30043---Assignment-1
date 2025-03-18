<template>
  <header class="header">
    <div class="overlay">
      <h1>Professional Event Management</h1>
      <p>Creating unforgettable experiences through meticulous planning and flawless execution</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped>
.header {
  background: url('@/assets/banner.png') center/cover no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.header .overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 20px;
}
</style>
