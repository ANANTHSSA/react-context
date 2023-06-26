import React, { useReducer } from 'react'
import{BrowserRouter , Route, Routes,Navigate} from "react-router-dom";
import Form from './Form';
import Login from './Login';
import Home from './Home';
import {stateContext} from './stateContext';
import { initialState, stateReducer } from './Reducer';


const Router = () => {
  const [state,dispatch] =useReducer(stateReducer,initialState);
  return (
    <stateContext.Provider value={{state,dispatch}}>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/form' element={<Form/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  </stateContext.Provider>
  ) 
}

export default Router