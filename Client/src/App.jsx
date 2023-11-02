import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import CreateTodo from "./CreateTodo";
import SingleTodo from './SingleTodo';
import UpdateTodo from './UpdateTodo';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route exact path = "/todos/:id" element={<SingleTodo/>} /> 
          <Route exact path = "/create-todo" element={<CreateTodo/>} />
          <Route exact path = "/update-todo/:id" element={<UpdateTodo/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
