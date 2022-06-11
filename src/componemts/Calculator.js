import React, { useState } from 'react';
import "./Calculator.css";

function Calculator() {

    const[result, setResult] = useState("");

    const clickHandler =(event)=> {
        setResult(result.concat(event.target.value));
    }

    const clearDisplay =()=> {
        setResult("");
    }

    const calCulate =()=> {
        setResult(eval(result).toString());
    }

  return (
    <div className='calc'>
        <input type="text" placeholder='0' id='screen' value={result}/>
        <input type="button" value="9" className='btn' onClick={clickHandler}/>
        <input type="button" value="8" className='btn' onClick={clickHandler}/>
        <input type="button" value="7" className='btn' onClick={clickHandler}/>
        <input type="button" value="6" className='btn' onClick={clickHandler}/>
        <input type="button" value="5" className='btn' onClick={clickHandler}/>
        <input type="button" value="4" className='btn' onClick={clickHandler}/>
        <input type="button" value="3" className='btn' onClick={clickHandler}/>
        <input type="button" value="2" className='btn' onClick={clickHandler}/>
        <input type="button" value="1" className='btn' onClick={clickHandler}/>
        <input type="button" value="0" className='btn' onClick={clickHandler}/>
        <input type="button" value="+" className='btn' onClick={clickHandler}/>
        <input type="button" value="-" className='btn' onClick={clickHandler}/>
        <input type="button" value="*" className='btn' onClick={clickHandler}/>
        <input type="button" value="/" className='btn' onClick={clickHandler}/>
        <input type="button" value="%" className='btn' onClick={clickHandler}/>
        <input type="button" value="." className='btn' onClick={clickHandler}/>
        <input type="button" value="=" className='btn1'onClick={calCulate}/>
        <input type="button" value="Clear" className='btn2'onClick={clearDisplay}/>
    </div>
  );
};

export default Calculator;