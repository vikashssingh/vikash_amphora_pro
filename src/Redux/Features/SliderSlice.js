import {createSlice} from '@reduxjs/toolkit';
  

export const SliderSlice = createSlice({
    name:"Slider",
    initialState:{
        checkboxValue1:false,
        checkboxValue2:false,
        checkboxValue3:false,
    },
    reducers:{
        goodChekbox:(state,event)=>{
            state.checkboxValue1 = event
        },
        fastCheckbox:(state,event) =>{
            state.checkboxValue2 = event
        },
        cheapCheckbox:(state,event)=>{
            state.checkboxValue3 = event
        }
    }
});

export const {goodChekbox,fastCheckbox,cheapCheckbox} = SliderSlice.actions;
export default SliderSlice.reducer;