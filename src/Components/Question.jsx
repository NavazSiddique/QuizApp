import React from 'react'
import image from "./Images/questionlogo.JPG";

import './component.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'


import {Button, Form, FormGroup, Input } from 'reactstrap'

//politics questions page

export default function Question() {

    const questions = [
		{
			question: 'What is the capital of India ?',
			Options: [
				{ answer: 'New York', isCorrect: false },
				{ answer: 'London', isCorrect: false },
				{ answer: 'New Delhi', isCorrect: true },
				{ answer: 'Dubai', isCorrect: false },
			],
		},
		{
			question: 'How many states in India ?',
			Options: [
				{ answer: '29', isCorrect: false },
				{ answer: '28', isCorrect: true },
				{ answer: '30', isCorrect: false },
				{ answer: '27', isCorrect: false },
			],
		},
		{
			question: 'Who is prime minister of India ?',
			Options: [
				{ answer: 'Narendra Modi', isCorrect: true },
				{ answer: 'Rahul Gandhi', isCorrect: false },
				{ answer: 'Arvind Kejriwal', isCorrect: false },
				{ answer: 'Donald Trump', isCorrect: false },
			],
		},
		{
			question: 'What is capital of Maharashtra ?',
			Options: [
				{ answer: 'satara', isCorrect: false },
				{ answer: 'Pune', isCorrect: false },
				{ answer: 'Kolhapur', isCorrect: false },
				{ answer: 'Mumbai', isCorrect: true },
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
                    <h1><b>&nbsp;Game Over</b></h1>
                    <br/>
                    
					&nbsp; <h3>You scored {score} out of {questions.length}!</h3>
                    <br/>
                    <br/>
					<br/>
                   &nbsp; <Button color="success" outline size="lg" >
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
						<div className='question-text'>
		
                           <h4> <img src={image} alt="logo" width="70" height="70"></img> &nbsp;&nbsp;  {questions[currentQuestion].question}
                           </h4> </div>
					</div>
                    <br/>
                    </div>
                   
                    
                    <Form className='questionForm'>
                        <div className='answer-section mb-2'>
                            <br/>
                       <FormGroup> 
                    { questions[currentQuestion].Options.map((rightAnswer,key)=>(
                        <h5  key={key}>
                     &nbsp; &nbsp; &nbsp; &nbsp;  <Input type='radio' id={rightAnswer.answer} value={rightAnswer.isCorrect} name="options" />
                      &nbsp; {rightAnswer.answer} <br/> <br/> 
                        
                       </h5>
                    
                        
                    ))          
                }
                
                </FormGroup>
                </div>
                <br/>
                
                
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Button  style={{backgroundColor:" rgb(64, 208, 59)"}} onClick={displayRadioValue}  color='success' outline>Submit</Button>
                
                </Form>
                   
					
				</>
			)}
        
    </div>
  )
}
