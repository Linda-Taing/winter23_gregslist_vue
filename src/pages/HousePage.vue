<template>

        <div class="HousePage" >
    <div class="container" v-if="house">
      <div class="row my-3">
        <div class="col-md-8 m-auto">
          <HouseCard :house="house" :showSeller="false" />
          <div class="card my-2">
            <div class="card-body">
              <p><b>
                {{ house.description }}
            </b></p>
            </div>
            <div>
              <ul>
                <li><b>Year Built: {{ house.year }}</b></li>
              </ul>
            </div>
          </div>
        </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div>
                <button @click="removeListing" v-if="account.id == house.creatorId" class="btn w-75 p-2 btn-danger">Remove
                  Listing</button>
              </div>
              <div>
                <span class="me-2">{{house.seller.name }}</span>
                <img height="50" width="70" :src="house.seller.picture" :alt="house.seller.name">
            </div>
              </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { router } from '../router.js';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';
export default {
    setup(){
        const route = useRoute()
    const houseId = route.params.houseId
    async function getHouseById() {
      try {
        await housesService.getHouseById(houseId)
      } catch (error) {
        Pop.error(error, '[Getting House By Id]')
      }
    }

    onMounted(() => {
    getHouseById()
    })

    return {
    houseId,
    account: computed(() => AppState.account),
    house: computed(() => AppState.house),
    async removeListing() {
        try {
            if (await Pop.confirm()) {
                await housesService.removeHouse(houseId)
                router.push({ name: 'Houses' })
            }
        } catch (error) {
        Pop.error(error, '[Removing House]')
        }
        }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>