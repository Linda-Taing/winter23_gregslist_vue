<template>
  <header class="p-3">
    <div>



      <div class="my-4">
        <Login />
      </div>

      <div class="mb-2">
        <router-link class="text-success lighten-30 selectable text-uppercase" :to="{name: 'Cars'}">
          CARS
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'Houses'}" class="text-success lighten-30 selectable text-uppercase">
          HOUSES
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'Jobs'}" class="text-success lighten-30 selectable text-uppercase">
          JOBS
        </router-link>
      </div>

    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';


export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
