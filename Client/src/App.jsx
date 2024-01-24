import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import CreateTodo from "./pages/CreateTodo";
import SingleTodo from './pages/SingleTodo';
import UpdateTodo from './pages/UpdateTodo';
import Login from './pages/Login';
import { Provider as ReduxProvider } from 'react-redux';
import {store} from "./redux/store"
import Signup from './pages/Signup';
function App() {
  
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route exact path = "/login" element={<Login/>} />
          <Route exact path = "/signup" element={<Signup/>} />
          <Route exact path = "/todos/:id" element={<SingleTodo/>} /> 
          <Route exact path = "/create-todo" element={<CreateTodo/>} />
          <Route exact path = "/update-todo/:id" element={<UpdateTodo/>} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App
