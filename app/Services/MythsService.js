import { ProxyState } from "../AppState.js";
import Myth from "../Models/Myth.js"
import { api } from "./AxiosService.js"

class MythsService(url = 'myth') {

  const res = await api.get(url)

  console.log(res.data.results)

  ProxyState.next = res.data.next
  ProxyState.previous = res.data.previous

  let myth = res.data.results.map(m => new Myth(m))
  ProxyState.myth = myth
}


export const mythsService = new MythsService()

