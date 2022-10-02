import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import  productListReducer from "./slices/productsSlice.js";


const reducer = combineReducers({
    productList: productListReducer
})

const initialState = {
}

const middleware = [thunk]

const store = configureStore({
    reducer: reducer,
})

export default store