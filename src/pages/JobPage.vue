<template>
    <div class="JobPage" >
    <div class="container" v-if="job">
      <div class="row my-3">
        <div class="col-md-8 m-auto">
          <JobCard :job="job" :showSeller="false" />
          <div class="card  my-2">
            <div class="card-body">
              <p><b>
                {{ job.title }}
            </b></p>
            </div>
            <div>
              <ul>
                <li><b>{{ job.description }}</b></li>
              </ul>
            </div>
          </div>
        </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div>
                <button @click="removePosting" v-if="account.id == job.creatorId" class="btn w-75 p-2 btn-danger">Remove
                  Posting</button>
              </div>
              
              <div>
                <span class="me-2">{{job.seller.name }}</span>
                <img class="rounded-circle" height="70" width="70" :src="job.seller.picture" :alt="job.seller.name">
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
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';
export default {
    setup(){
        const route = useRoute()
    const jobId = route.params.jobId
    async function getJobById() {
      try {
        await jobsService.getJobById(jobId)
      } catch (error) {
        Pop.error(error, '[Getting Job By Id]')
      }
    }

    onMounted(() => {
    getJobById()
    })
    return {
    jobId,
    account: computed(() => AppState.account),
    job: computed(() => AppState.job),
        
    async removePosting() {
        try {
            if (await Pop.confirm('Would you like to remove your job Posting? Are you surely sure?')) {
                await jobsService.removeJob(jobId)
                router.push({ name: 'Jobs' })
            }
        } catch (error) {
        Pop.error(error, '[Removing Job]')
        }
        }
        }
        }
    }

</script>


<style lang="scss" scoped>

</style>