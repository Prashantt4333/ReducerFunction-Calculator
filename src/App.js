import './App.css';
import { useReducer } from 'react';


const oldState =0
let reducerFunction = (oldState,action) =>{
  console.log("oldState---->",oldState)
  console.log("action=====>",action)
  console.log("action.type=====>",action.type)
  switch(action.type){
    case 'ADDITION' :
      return oldState+action.payload;
      break;
    case 'SUBSTRACTION' :
      return oldState-action.payload;
      break;
   
    default:
      return oldState;
      
    
  }

} 

function App() {
  const [newState,dispatch] = useReducer(reducerFunction,oldState)
  return (
    <div className='App'>
      <h1>{newState}</h1>
      <button onClick={()=>{ dispatch({type:"ADDITION",payload:1})}}>+</button>
      <button onClick={()=>{ dispatch({type:"SUBSTRACTION",payload:1})}}>-</button>
    </div>
  );
}

export default App;
