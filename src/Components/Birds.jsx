import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import image from "./Images/questionlogo.JPG";

import {Button, Form, FormGroup, Input } from 'reactstrap'

//Birds questions page

export default function Birds() {

    const questions = [
		{
			question: 'Which of the following body parts do not exist in birds ?',
			Options: [
				{ answer: 'Toes', isCorrect: false },
				{ answer: 'Nail', isCorrect: false },
				{ answer: 'Teeth', isCorrect: true },
				{ answer: 'Spines', isCorrect: false },
			],
		},
		{
			question: 'What do we call a baby swan ?',
			Options: [
				{ answer: 'joey', isCorrect: false },
				{ answer: 'cygnet', isCorrect: true },
				{ answer: 'calf', isCorrect: false },
				{ answer: 'cub', isCorrect: false },
			],
		},
		{
			question: 'Which is the largest type of penguin ?',
			Options: [
				{ answer: 'Emperor penguin', isCorrect: true },
				{ answer: 'Queen penguin', isCorrect: false },
				{ answer: 'King penguin', isCorrect: false },
				{ answer: 'penguin', isCorrect: false },
			],
		},
		{
			question: 'Which of the following birds is characterised by a big yellow bill ?',
			Options: [
				{ answer: 'Ibis', isCorrect: false },
				{ answer: ' Puffin', isCorrect: false },
				{ answer: 'Toucan', isCorrect: false },
				{ answer: 'Kiwi', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
        console.log(isCorrect)
		if (isCorrect==="true") {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


    

function displayRadioValue() {
    var radioValue = document.getElementsByName('options')
     for (let index = 0; index < radioValue.length; index++) {
            if(radioValue[index].checked)
            { 
                var isCorrect = radioValue[index].value
                handleAnswerOptionClick(isCorrect)
               // console.log(radioValue[index].value)
               radioValue[index].checked = false
            }
            
           
     }
    
}


  return (
     
    <div>
        
    <br/><br/>
        {showScore ? (
            <div className='score-section'>
                <h1>Game Over </h1>
                <br/>
                
               <h3> You scored {score} out of {questions.length}! </h3>
                <br/>
                <br/>
                <br/>
                <Button color="success" outline size="lg" >
               <Link to='/'>Retry</Link>
                   </Button>
            </div>
        ) : (
            <>
               <div className='container'>
                <div className='question-section'>
                    <div className='question-count'>
                  <center><span>Question {currentQuestion + 1}</span>/{questions.length}</center>
                    </div>
                    <br/>
                   <div className='question-text'><img src={image} alt="logo" width="70" height="70"></img>&nbsp; &nbsp; &nbsp; {questions[currentQuestion].question}</div>
                </div>
                </div>
                <br/>
               
                
                <Form className='border-2  rounded-2'>
                   <FormGroup> 
                { questions[currentQuestion].Options.map((rightAnswer,key)=>(
                    <div className='answer-section' key={key}>
              &nbsp; &nbsp; &nbsp; &nbsp;    <Input type='radio' id={rightAnswer.answer} value={rightAnswer.isCorrect} name="options" />
              &nbsp;  {rightAnswer.answer} <br/> <br/> 
                    
                   </div>
                
                    
                ))          
            }
            
            </FormGroup>
            <br/>

            {/* <Button   onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} color='success' outline>Submit</Button> */}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   <Button style={{backgroundColor:" rgb(64, 208, 59)"}}  onClick={displayRadioValue} >Submit</Button>

            </Form>
               
                
            </>
        )}
    
</div>
  )
}
