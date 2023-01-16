import React from 'react'
import {Button, Input } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import image from "./Images/questionlogo.JPG";



export default function Home() {

//    const [option, setOption] = useState(0)
const navigate = useNavigate();
  const handleClick =()=> {
    
    var optionValue = document.getElementsByName('option')
    for (let index = 0; index < optionValue.length; index++) {
           if(optionValue[index].checked)
           { 
               const linkValue = optionValue[index].value
            //    window.location.href = linkValue;
            navigate(linkValue, { replace: true })

           }
        
           

    }
   }

    return (
        <div className='container'>
            <br />
            <center><b className='homeTitle'> Welcome to Quiz !! </b></center>
            <br />
            <br />
            
            <div className='homeSubheader'>
            <img src={image} alt="logo" width="70" height="60"></img>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                Please choose one Category to Start
            </div>
            <br /><br /> 
            <div>
            &nbsp;&nbsp;&nbsp; <Input type="radio" value="/questions" name="option" />&nbsp; Politics <br/><br/>

            &nbsp;&nbsp;&nbsp;  <Input type="radio" value="/sports" name="option" />&nbsp; Sports <br/><br/>

            &nbsp;&nbsp;&nbsp;  <Input type="radio" value="/birds" name="option" />&nbsp; Birds <br/><br/>
            </div>
            <br />
            <div>
            &nbsp; &nbsp;&nbsp; 
             <Button  style={{backgroundColor:" rgb(64, 208, 59)"}} onClick={() => handleClick()}   >Submit</Button>
          
            </div>
           
            {/* <div className='row'>
      <div className='col-4'>
      
      <div className='startButton'>
      <Button color="info" outline size="lg" >
        <Link to='/questions'>Politics</Link>
      </Button>
      </div>
    </div>

    <div className='col-4'>
      
      <div className='startButton'>
      <Button color="info" outline size="lg" >
        <Link to='/sports'>Sports</Link>
      </Button>
      </div>
    </div>

    <div className='col-4'>
      
      <div className='startButton'>
      <Button color="info" outline size="lg" >
        <Link to='/birds'>Birds</Link>
      </Button>
      </div>
    </div>
    </div> */}
    
        </div>
    )
}


