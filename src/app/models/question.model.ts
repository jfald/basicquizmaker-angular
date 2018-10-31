class Question {
    _id:string;
    question : String;
//    answers : [{ pos: String, answer: String }];
    answers : String;
    correct : String;
    section : String;
    status: String;

    constructor(
    ){
      this.question = ""
      this.answers = ""
      this.correct = ""
      this.section = ""
      this.status = ""
    }
}

export default Question;
