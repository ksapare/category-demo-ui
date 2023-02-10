import React from 'react'
import {useState} from 'react'
import './calculator.styles.css'

export default function Calculator(){

    const [values, setValues] = useState({
        inputOne : 0,
        inputTwo : 0
    })

    const [total, setTotal] = useState(0)

   function handleChange(e) {
       setValues({...values,[e.target.name] : e.target.value})
   }

    function handleClick(){
        setTotal(parseInt(values.inputOne) + parseInt(values.inputTwo))
    }

    
    return (
        <div className = 'Calculator'>
            <h1 style={{color: 'white', backgroundColor:'navy'}}>Calculate Here...!</h1>
            <div className = 'form-calculator'>
                <label className='label'>Enter First Number:</label>
                <input name='inputOne' type='number' onChange={handleChange} />
                <label className='label'>Enter Second Number:</label>
                <input name='inputTwo' type='number' onChange={handleChange} />
                <button className='addButton' onClick={handleClick}> Add </button>
                <label className='label'>Total:</label>
                <input name='output' type='number' value={total} readOnly />
            </div>
        </div>
    )
}