export default class Myth {
  constructor({ difficulty, question, correct_answer, incorrect_answers }) {

    this.difficulty = difficulty
    this.question = question
    this.correct = correct_answer
    this.answers = incorrect_answers

    let randIndex = Math.floor(Math.random() * 3)
    this.answers.splice(randIndex, 0, this.correct)
  }


  get Template() {
    return `
    <div class="row" id="myths">
        <div class="col-12 mt-5 p-4" style="background-color: grey; opacity: 0.75">
              <h3 style="color: black; text-shadow: 1px 1px white"><b>Difficulty: (${this.difficulty}) - Question: ${this.question}</b></h3>
              <button type="" class="btn btn-primary btn-outline-info m-3 align-center" style="background-color: seafoam; font-size: 24px; color: black; text-shadow: 1px 1px white" onclick="app.mythsController.answer('${this.answers[0]}','${this.correct}')">${this.answers[0]}</button>
              <button type="" class="btn btn-primary btn-outline-info m-3 align-center" style="background-color: seafoam; font-size: 24px; color: black; text-shadow: 1px 1px white" onclick="app.mythsController.answer('${this.answers[1]}','${this.correct}')">${this.answers[1]}</button>
              <button type="" class="btn btn-primary btn-outline-info m-3 align-center" style="background-color: seafoam; font-size: 24px; color: black; text-shadow: 1px 1px white" onclick="app.mythsController.answer('${this.answers[2]}','${this.correct}')">${this.answers[2]}</button>
              <button type="" class="btn btn-primary btn-outline-info m-3 align-center" style="background-color: seafoam; font-size: 24px; color: black; text-shadow: 1px 1px white" onclick="app.mythsController.answer('${this.answers[0]}','${this.correct}')">${this.answers[0]}</button>
          </div >
      </div >`

  }

  get Answers() {
    let template = ''
    this.answers.forEach(i => template += `<h3 onclick="">${i}</h3>`)
    return template
  }
}