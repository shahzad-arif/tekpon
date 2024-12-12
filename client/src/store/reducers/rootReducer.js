import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "../slices/categorySlices.js";

const rootReducer = combineReducers({
	category: categorySlice,
	// Add more slices here
});

export default rootReducer;
