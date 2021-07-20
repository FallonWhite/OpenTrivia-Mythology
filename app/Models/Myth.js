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
    return `<ol id="myth" <li>${this.difficulty} - ${this.question} : ${this.correctAnswer}${this.incorrectAnswers}</li>`
  }

<div class="col-6 mt-3" id="myth">
  <div class="row" id="myth">
    <div class="">
      <div class="text-center">
        <h3 style="color: black; text-shadow: 1px 1px darkblue"><b>${this.difficulty} -${this.question}</b></h3>
        <button type="" class="btn btn-primary btn-outline-info btn-sm mb-3 align-center" onclick="app.mythsController.answers('${this.answers[0]}')" style="font-size: 16px;"></button>
        <button type="" class="btn btn-primary btn-outline-info btn-sm mb-3 align-center" onclick="app.mythsController.answers('${this.answers[1]}')" style="font-size: 16px;"></button>
        <button type="" class="btn btn-primary btn-outline-info btn-sm mb-3 align-center" onclick="app.mythsController.answers('${this.answers[2]}')" style="font-size: 16px;"></button>
        <button type="" class="btn btn-primary btn-outline-info btn-sm mb-3 align-center" onclick="app.mythsController.answers('${this.answers[3]}')" style="font-size: 16px;"></button>

      </div >

    </div>
  </div>

</div >
}
