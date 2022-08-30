import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goodChekbox, fastCheckbox, cheapCheckbox} from './SliderSlice';
import './Slider.css';

const Slider = () => {

    const goodCheckboxval = useSelector((state)=>state.slider.checkboxValue1.payload ?? state.slider.checkboxValue1 );
    const fastCheckboxVal = useSelector((state)=> state.slider.checkboxValue2.payload ?? state.slider.checkboxValue2);
    const cheapCheckboxVal = useSelector((state)=> state.slider.checkboxValue3.payload ?? state.slider.checkboxValue3);
    
    const dispatch = useDispatch();

    function goodHandler(e){
        dispatch(goodChekbox(e.target.checked));
        if(e.target.checked===true){
            dispatch(cheapCheckbox(false));
        }
        // console.log(!goodCheckboxval);
        // console.log("eventy",e.target.checked)

    }
    function fastHandler(e){
        dispatch(fastCheckbox(e.target.checked))
        // console.log(e.target.checked);
        // console.log(!fastCheckboxVal)
        if(e.target.checked===true && cheapCheckboxVal ===true ){
            dispatch(goodChekbox(false))
        }
    }

    function cheapHandler(e){
        dispatch(cheapCheckbox(e.target.checked));
        if(e.target.checked ===true){
            dispatch(fastCheckbox(false));
        }
        // console.log(e.target.checked);
        // console.log(!cheapCheckboxVal);

    }
    return (
        <>
            <div className='Super-parent'>
                <div className='parent-div'>
                    <div className='good checkbox-input'>
                        <input type="checkbox" className='checkbox1'  checked={goodCheckboxval} onChange={(e)=>goodHandler(e)} />
                        <label className='label'>GOOD</label>
                    </div>
                    <div className='fast checkbox-input'>
                        <input type="checkbox" className='checkbox2' checked={fastCheckboxVal}  onChange={(e)=>fastHandler(e)} />
                        <label className='label'>FAST</label>
                    </div>
                    <div className='cheap checkbox-input'>
                        <input type="checkbox" className='checkbox3' checked={cheapCheckboxVal} onChange ={(e)=>cheapHandler(e)}  />
                        <label className='label'>CHEAP</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;
