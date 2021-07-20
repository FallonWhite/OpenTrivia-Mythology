import { ProxyState } from "../AppState.js";
import Myth from "../Models/Myth.js"
import { api } from "./AxiosService.js"

class MythsService {
  async getAllMyths(url = '?amount=2&category=20') {

    const res = await api.get(url)

    console.log(res.data.results)

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

    let myth = res.data.results.map(m => new Myth(m))
    ProxyState.myths = myth
  }


}
export const mythsService = new MythsService()
