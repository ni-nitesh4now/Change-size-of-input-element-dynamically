import {  useState, useRef, useEffect} from "react";
import React from "react";

export default function Inputs(props){
    
    const [m1, setm1] = useState('');
    const onChangeEvent = (e)=>{
        setm1(e.target.value);
    }
    return (
        <div style={{display:'inline'}}>
            <input value={m1} style={{width:m1.length===0?20:m1.length*5+20}} onChange={onChangeEvent} placeholder={'Type here..'} inputMode="text" />
        </div>
    )
}
