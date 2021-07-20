import { ProxyState } from "../AppState.js";
import { mythsService } from "../Services/MythsService.js";

function _draw() {
  let myths = ProxyState.myths
  let template = ''
  myths.forEach(m => template += m.Template)
  document.getElementById('myths').innerHTML = template

  document.getElementById('buttons').innerHTML = `
  <button type="button" class="btn btn-secondary btn-outline-info m-5" style="background-color: pink; font-size: 24px; color: black; text-shadow: 1px 1px white"
  ${ProxyState.previous ? '' : 'disabled'}
  onclick="app.mythsController.getMore('previous')"><b>Previous</b></button>
<button type="button" class="btn btn-secondary btn-outline-info m-5" style="background-color: pink; font-size: 24px; color: black; text-shadow: 1px 1px white" ${ProxyState.next
      ? '' : 'disabled'} onclick="app.mythsController.getMore('next')"><b>Next</b></button>
                        `


}


export default class MythsController {
  constructor() {
    // REGISTER ALL LISTENERS
    ProxyState.on('myths', _draw)

    // GET DATA FOR CONTROLLER
    this.getAll()
  }

  async getAll() {
    try {
      await mythsService.getAllMyths()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }


  async getMore(direction) {
    try {
      await mythsService.getAllMyths(ProxyState[direction])
    } catch (e) {
      window.alert("Something went wrong: " + e)
    }
  }
}