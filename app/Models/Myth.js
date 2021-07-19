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
}
<div class="col-4 mt-3">
  <div class="" style="">
    <div class="">
      <div class="text-center">
        <h3 style="color: black; text-shadow: 1px 1px darkblue"><b>${this.question}</b></h3>
        <button type="" class="btn btn-primary btn-outline-info btn-sm mb-3 align-center" onclick="app.mythsController.answers('${this.id}')" style="font-size: 16px;"><b>Delete List</b></button>
      </div >
      <div class="bg-white">
        <p class="text-center pt-2 pl-2" style="color: black; text-shadow: 1px 1px darkblue background-color: white"><b>Tasks: ${this.MyTasks[1]}</b></p>
        <ul class="bg-white">
          ${this.MyTasks[0]}
        </ul>
        <form onSubmit="app.listsController.addTask('${this.id}')" class="m-0 mb-2 mr-3">
          <div class="p-3 tasks my-0 mx-0 mr-3 text-center" style="background-color: white">
            <input type="text" name="addTask" class="" placeholder="Add Task..." required minlength="3" , maxlength="50">
            <button style="background-color: ${this.color}"> + </button></form> 
    </div>
      </div>

    </div >
  </div >
</div >