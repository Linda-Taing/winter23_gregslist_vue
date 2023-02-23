<template>
    <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="company" class="form-label">company</label>
                <input required type="text" v-model="editable.company" class="form-control" id="company" placeholder= "company" name="company">
            </div>
            <div class="mb-3">
                <label for="jobTitle" class="form-label">jobTitle</label>
                <input required type="text" v-model="editable.jobTitle" class="form-control" id="jobTitle" placeholder="Job Title" name="jobTitle">
            </div>
            <div class="mb-3">
                <label for="rate" class="form-label">rate</label>
                <input required type="number" v-model="editable.rate" class="form-control" id="rate" placeholder="rate" name="rate">
            </div>
            <div class="mb-3">
                <label for="hours" class="form-label">hours</label>
                <input required type="number" v-model="editable.hours" class="form-control" id="hours" placeholder="hours..." name="hours">
            </div>
            <div class="mb-3">
            <label for="imgUrl" class="form-label">imgUrl</label>
            <input required type="text" v-model="editable.imgUrl" class="form-control" id="imgUrl" placeholder="company logo or job" name="imgUrl">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <textarea name="description" type="text" v-model="editable.description" class="form-control" id="description" rows="3">
                </textarea>
            </div>
            <div>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
        {{ editable.id ? 'Save Changes' : 'Create Job' }}
      </button>
    </div>
        </form>
</template>

<script>
import { ref } from 'vue';
import { router } from '../router.js';
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';
export default {
    setup(){        
    const editable = ref({})

return {
    editable,
    async handleSubmit() {
try {
  const job = editable.value.id
    ? await jobsService.editJob(editable.value)
    : await jobsService.createJob(editable.value)

  editable.value = {}
  if (job?.id) {
    router.push({ name: 'Job', params: { jobId: job.id } })
  }
} catch (error) {
  Pop.error(error, '[Submitting Job!]')
}
}

}
}
}
</script>


<style lang="scss" scoped>

</style>