<template>
  <div class="loader-container">
    <div class="loader-bar"></div>
  </div>
</template>

<style scoped>
.loader-container {
  width: 100%;
  height: 4px;
  background-color: #7dc9b8;
  position: relative;
  overflow: hidden;
}

.loader-bar {
  width: 100%;
  height: 100%;
  background-color: #1f3c3e;
  animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
