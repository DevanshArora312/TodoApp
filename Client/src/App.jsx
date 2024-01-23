import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import CreateTodo from "./CreateTodo";
import SingleTodo from './SingleTodo';
import UpdateTodo from './UpdateTodo';
import Login from './Login';
import { Provider as ReduxProvider } from 'react-redux';
import {store} from "./redux/store"
function App() {
  
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path = "/" element={<Login/>} /> */}
          <Route exact path = "/" element={<Home/>} />
          <Route exact path = "/todos/:id" element={<SingleTodo/>} /> 
          <Route exact path = "/create-todo" element={<CreateTodo/>} />
          <Route exact path = "/update-todo/:id" element={<UpdateTodo/>} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App
