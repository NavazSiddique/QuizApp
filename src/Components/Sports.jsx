import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import image from "./Images/questionlogo.JPG";

import {Button, Form, FormGroup, Input } from 'reactstrap'

//Sports questions page

export default function Sports() {
    const questions = [
		{
			question: 'What is the national sport of India ?',
			Options: [
				{ answer: 'Cricket', isCorrect: false },
				{ answer: 'FootBall', isCorrect: false },
				{ answer: 'Hockey', isCorrect: true },
				{ answer: 'Table-Tennis', isCorrect: false },
			],
		},
		{
			question: 'How many minutes is a rugby match ?',
			Options: [
				{ answer: '8 Minutes', isCorrect: false },
				{ answer: '80 Minutes', isCorrect: true },
				{ answer: '180 Minutes', isCorrect: false },
				{ answer: '200 Minutes', isCorrect: false },
			],
		},
		{
			question: 'What was the Olympic city of 1992 ?',
			Options: [
				{ answer: 'Barcelona', isCorrect: true },
				{ answer: 'Delhi', isCorrect: false },
				{ answer: 'Qatar', isCorrect: false },
				{ answer: 'Newyork', isCorrect: false },
			],
		},
		{
			question: 'In which country were the first Olympic Games held ?',
			Options: [
				{ answer: 'Rome', isCorrect: false },
				{ answer: 'USA', isCorrect: false },
				{ answer: 'UK', isCorrect: false },
				{ answer: 'Greece', isCorrect: true },
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
               
               <h3> You scored {score} out of {questions.length}!</h3>
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
                    <center> <span>Question {currentQuestion + 1}</span>/{questions.length}</center>
                    </div>
                    <br/>
                    <div className='question-text'><img src={image} alt="logo" width="65" height="60"></img>&nbsp; &nbsp; {questions[currentQuestion].question}</div>
                </div>
                </div>
                <br/>
               
                
                <Form className='border-2  rounded-2'>
                   <FormGroup> 
                { questions[currentQuestion].Options.map((rightAnswer,key)=>(
                    <div className='answer-section' key={key}>
                  &nbsp; &nbsp; &nbsp; &nbsp; <Input type='radio' id={rightAnswer.answer} value={rightAnswer.isCorrect} name="options" />
                  &nbsp;   {rightAnswer.answer} <br/> <br/> 
                    
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
