<template>
         <div class="row flex-grow-1">
        <div class="col-md-4 my-3" v-for="j in jobs">
          <JobCard :job="j" />
        </div>
        </div>
  <div class="row sticky-bottom" v-if="account.id">
        <div class="col-md-12 text-end">
          <button class="fs-5 btn btn-warning" data-bs-toggle="modal" data-bs-target="#test-modal">
          ⚒️
          </button>
        </div>
      </div>
      
    <Modal id="test-modal" modal-title="Find a Job ⚒️">
      <JobForm />
    </Modal>
</template>


<script>
import { onMounted,computed } from 'vue'
import Pop from '../utils/Pop.js'
import {jobsService} from '../services/JobsService.js';
import { AppState } from '../AppState.js';

export default {
    setup(){
    async function getJobs() {
    try {
        await jobsService.getJobs()
    } catch (error) {
        Pop.error(error, '[Getting Jobs]')
}
}

    onMounted(() => {
    getJobs()
})

        return {
    account: computed(() => AppState.account),
    jobs: computed(() => AppState.jobs )

        }
    }
}
</script>


<style lang="scss" scoped>

</style>