import React, { Component } from 'react';




class GQuizzes extends Component {
  constructor(){
    super();
    this.state={
      quizzes:[]
    }
  }

componentDidMount(){
  fetch("/api/generatequiz")
  .then(res=>res.json())
  .then(quizzes => this.setState({quizzes:quizzes},()=> console.log("success",quizzes)));
}

  render() {
    return (
      <div className="Quizzes">
          <h2>Quiz</h2>
          <ul>
            {this.state.quizzes.map(quizzes =>
              <li key = {quizzes.question_number}>{quizzes.question}{quizzes.display_option}</li>
            )}
          </ul>
      </div>
    );
  }
}

export default GQuizzes;
