export default class Myth {
  constructor({ difficulty, question, correct_answer, incorrect_answers }) {
    this.difficulty = difficulty
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers

  }


  get Template() {
    return `<li>${this.difficulty} - ${this.question} : ${this.correctAnswer}${this.incorrectAnswers}</li>`
  }
}
