import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"

class JobsService {
    async getJobs() {
        const res = await api.get('auth/api/jobs')
        logger.log('[get jobs]', res.data)
        AppState.jobs = res.data
        logger.log(AppState.jobs);
    }
    async getJobById(jobId) {
        AppState.job = null
        const res = await api.get('auth/api/jobs/' + jobId)
        AppState.job = res.data
    }
    async createJob(jobData) {
        const res = await api.post('auth/api/jobs', jobData)
        AppState.jobs.push(res.data)
        return res.data
    }
    async editJob(jobData) {
        const res = await api.put('auth/api/jobs/' + jobData.id, jobData)
        let i = AppState.jobs.findIndex(j => j.id == jobData.id)
        if (i == -1) {
            throw new Error('No Work here...')
        }
        AppState.jobs.splice(i, 1, res.data)
    }
    async removeJob(jobId) {
        const res = await api.delete('auth/api/jobs/' + jobId)
        let i = AppState.jobs.findIndex(j => j.id == jobId)
        if (i != -1) {
            AppState.jobs.splice(i, 1)
        }
    }
}
export const jobsService = new JobsService()