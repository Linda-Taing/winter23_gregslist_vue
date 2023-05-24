<template>
  <div class="CarCard card">
    <router-link :to="{ name: 'Car', params: { carId: car.id } }">
      <img class="rounded-top img-fluid w-100" :src="car?.imgUrl" :alt="car?.make + ' ' + car?.model">
    </router-link>

    <div class="card-body">
      <p><b>{{ car?.make }} {{ car?.model }} - ${{ car?.price }}</b></p>
    </div>
    <div class="card-footer text-end" v-if="showSeller">
      <span class="on-hover me-2">{{ car?.seller.name }}</span>
      <img :src="car?.seller.picture" :alt="car?.seller.name" :title="car?.seller.name" height="40" width="40"
        class="rounded-circle">
    </div>
  </div>
</template>


<script>
export default {
  props: {
    car: { type: Object, required: true },
    showSeller: { type: Boolean, default: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
