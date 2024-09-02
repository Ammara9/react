import React from "react";

const Question = (props) => {
 const data = props.data;

 if (data === undefined) return <p>There is no data</p>;

 const handleChange = (e) => {
    props.onAnswer(e.target.value);
    //notify the parent 
 };


 const currentQuestion = data;
 const currentUserAnswer = data.currentUserAnswer;
//showing currrent question and there ans
 return (
<>


      <div className="py-3 px-3  rounded shadow" style={{
        backgroundColor: '#F6F6F2'
      }}>
        <div className="my-4 py-4 px-5 card-body  rounded " style={{ backgroundColor: 'white'}}>
            {/* showing question with number */}
        <h4>Fråga {props.index + 1}</h4>
        <h6>{currentQuestion.question}</h6>
        </div>
    {/* answers with checkbox and choices */}
        {currentQuestion.all_answers.map((answer, index) => (
  <div key={index} className="form-check my-2 py-3 px-2 card-body  rounded" style={{ backgroundColor: 'white'}}>
          <input
             className="success"
             type="checkbox"
             name="options-outlined"
             id="success-outlined"
             value={answer}
             checked={currentUserAnswer === answer ? true : false}
             onChange={handleChange}
          />
    
          <label className="mx-3" for="success-outlined">
             {answer}
          </label>
          </div>
       
        ))}
      </div>
      </>
  
 );
};

export default Question;