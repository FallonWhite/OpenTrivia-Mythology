import { ProxyState } from "../AppState.js";
import { MythsService } from "../Services/MythsService.js";

function _draw() {
  let myths = ProxyState.myths
  let template = ''
  myths.forEach(m => template += m.Template)
  document.getElementById('myths').innerHTML = template

  document.getElementById('buttons').innerHTML = `
  <button type="button" class="btn btn-secondary btn-outline-info m-3" style="font-size: 24px;"
  ${ProxyState.previous ? '' : 'disabled'}
  onclick="app.mythsController.getMore('previous')"><b>Previous</b></button>
<button type="button" class="btn btn-secondary btn-outline-info m-3" style="font-size: 24px;" ${ProxyState.next
      ? '' : 'disabled'} onclick="app.mythsController.getMore('next')"><b>Next</b></button>
                        `


}


export default class MythsController {
  constructor() {
    // REGISTER ALL LISTENERS
    ProxyState.on('myth', _draw)

    // GET DATA FOR CONTROLLER
    this.getAll()
  }

  async getAll() {
    try {
      await mythsService.getAllMyth()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }


  async getMore(direction) {
    try {
      await mythsService.getAllMyth(ProxyState[direction])
    } catch (e) {
      window.alert("Something went wrong: " + e)
    }
  }
}