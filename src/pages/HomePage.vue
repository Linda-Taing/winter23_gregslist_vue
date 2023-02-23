<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuG2JMbC_IF-eVnGnXBBkq6bYxv9VAzCLeQ&usqp=CAU"
        alt="CodeWorks Logo"
        class="rounded-circle text-dark"
      >
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        WELCOME TO GREGSLIST®️ VUE!! 
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
