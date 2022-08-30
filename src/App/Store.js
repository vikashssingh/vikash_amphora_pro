import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "../Redux/Features/SliderSlice";


export default configureStore({
    reducer:{
        slider:SliderSlice
    },
});