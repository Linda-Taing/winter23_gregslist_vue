<template>
     <div class="HouseCard my-3 card">
    <router-link :to="{ name: 'House', params: { houseId: house.id } }">
      <img class="rounded-top  w-100" :src="house.imgUrl" :alt="house.bedrooms + ' ' + house.bathrooms">
    </router-link>

    <div class="card-body">
      <p><b>This home has {{ house.bedrooms }} bedrooms {{ house.bathrooms }} bathrooms.  Priced at ${{ house.price }}! What a Deal?!</b></p>
    </div>
    <div class="card-footer text-end" v-if="showSeller">
      <span class="on-hover me-2">{{ house.seller.name }}</span>
      <img :src="house.seller.picture" :alt="house.seller.name" :title="house.seller.name" height="40" width="40"
        class="rounded-circle">
    </div>
  </div>
</template>


<script>
export default {
    props: {
    house: { type: Object, required: true },
    showSeller: { type: Boolean, default: true }
  },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

.card{
    height:50vh;
}
.img{
    height:50vh;
}


</style>