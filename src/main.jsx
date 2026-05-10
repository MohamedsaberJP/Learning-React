import { createRoot } from 'react-dom/client'
import { All , Is_premium , Increment , Objectstate , Dolist , Todolist , Shopping} from './usestatefunc'
import {Reducercom } from "./reducerpage"
import { Game } from './tic';
import App from './App';

createRoot(document.getElementById('root')).render(
  <>
    {/* <All />
    <Is_premium /> 
    <Increment />
    <Objectstate />
    <Dolist />
    <Todolist />
    <Shopping />
    <Reducercom />
    <App />*/}
    <Game />

  </>
)
