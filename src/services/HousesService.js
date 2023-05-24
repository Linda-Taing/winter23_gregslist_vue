import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";


class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        // logger.log('[get houses]', res.data)
        AppState.houses = res.data
        // logger.log(AppState.houses);
    }
    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        AppState.houses.push(res.data)
        return res.data
    }
    async editHouse(houseData) {
        const res = await api.put('api/houses/' + houseData.id, houseData)
        let i = AppState.houses.findIndex(c => c.id == houseData.id)
        if (i == -1) {
            throw new Error('Sorry Nobody is Home...')
        }
        AppState.houses.splice(i, 1, res.data)
    }
    async removeHouse(houseId) {
        const res = await api.delete('api/houses/' + houseId)
        let i = AppState.houses.findIndex(h => h.id == houseId)
        if (i != -1) {
            AppState.houses.splice(i, 1)
        }
    }
    async getHouseById(houseId) {
        AppState.house = null
        const res = await api.get('api/houses/' + houseId)
        AppState.house = res.data
    }

}
export const housesService = new HousesService()