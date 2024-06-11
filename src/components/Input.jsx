import React, { useRef, useState } from 'react';
import './input.css';
import cam from '../assets/cam.svg';
import magnify from '../assets/magnify.svg';
import mic from '../assets/mic.svg';

const Input = ({m}) => {
    
    const [val,setval] =useState('');

    const handleSubmit = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            if(val.trim()){
                m(val);
                setval('');
            }
        }
    }


    const textAreaRef = useRef(null);


    return (
        <div>
            <div className='outterSearchBox' onClick={()=> textAreaRef.current.focus()}>
                <div className='leftPart'>
                    <img src={magnify} alt="Magnify" />
                </div>
                
                <form   className='forms'>
                    <textarea 
                    ref={textAreaRef} 
                    value={val} 
                    onChange={(e)=>{
                        setval(e.target.value)
                    }}
                    onKeyPress={(e)=>{
                        if(e.key === 'Enter')e.preventDefault();
                    }}
                    onKeyUp={handleSubmit}
                    name="text" 
                    className='forms-input'></textarea>
                

                </form>
                <div className='rightPart'>
                    <img src={mic} alt="Mic" />
                    <img src={cam} alt="Cam" />
                </div>

            </div>
        </div>
    )
}

export default Input;
