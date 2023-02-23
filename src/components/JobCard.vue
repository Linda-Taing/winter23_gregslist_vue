<template>
     <div class="JobCard card">
        <router-link :to="{ name: 'Job', params: { jobId: job.id } }">
        <img class="img-fluid w-100 rounded-top" :src="job.imgUrl" :alt="job.jobTitle + ' ' + job.company">
        </router-link>
        
        <div class="card-body">
            <p><b>This job pay rate is ${{ job.rate }} maybe an hour... maybe longer? You will work {{ job.hours }} hours. You will love working at {{ job.company }}! Join our team!</b></p>
        </div>
        <div class="card-footer text-end" v-if="showSeller">
            <span class="on-hover me-2">{{ job.seller.name }}</span>
            <img :src="job.seller.picture" :alt="job.seller.name" :title="job.seller.name" height="40" width="40"
            class="rounded-circle">
        </div>
    </div>
</template>

<script>
export default {
    props: {
    job: { type: Object, required: true },
    showSeller: { type: Boolean, default: true }
},
   
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>
.card{
height:30em;
}
</style>