import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";


class HousesService {
    async getHouses() {
        const res = await api.get('auth/api/houses')
        console.log('[get houses]', res.data)
        AppState.houses = res.data
        console.log(AppState.houses);
    }
    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        AppState.houses.push(res.data)
        return res.data
    }
    async editHouse(houseData) {
        const res = await api.put('auth/api/houses/' + houseData.id, houseData)
        let i = AppState.houses.findIndex(c => c.id == houseData.id)
        if (i == -1) {
            throw new Error('Sorry Nobody is Home...')
        }
        AppState.cars.splice(i, 1, res.data)
    }
    async removeHouse(houseId) {
        const res = await api.delete('auth/api/houses/' + houseId)
        let i = AppState.houses.findIndex(h => h.id == houseId)
        if (i != -1) {
            AppState.houses.splice(i, 1)
        }
    }
    async getHouseById(houseId) {
        AppState.house = null
        const res = await api.get('auth/api/houses/' + houseId)
        AppState.house = res.data
    }

}
export const housesService = new HousesService()