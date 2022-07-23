import React from 'react'
import "./main.css"
function Main() {
  return (
    <div className='container'>
        <div className='todo_container'>
            <div className='header'>
                <div className='bar'/>
                <div className='title'> 
                    Tasks List
                </div>
                <div className='bar'/>
            </div>
            <div className='input'>
                <input className='input_field' type="text" />
                <button className='button_design'>+</button>
            </div>
            <div className='result'>
                <div className='result_output'>
                    <div className='result_content'>
                        hanan
                    </div>
                    <div className='buttons_action'>
                        <button className='btn'>edit</button>
                        <button className='btn'>delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main