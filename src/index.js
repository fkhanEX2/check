import React , { useEffect, useState }from "react";
import  ReactDOM  from "react-dom";
import Calculator from "./Components/Calculator";
import './index.css'; 
import UserForm from "./UserForm";


// ReactDOM.render(<Calculator/>, document.getElementById('root'));



// function UseStateHook() {
//   const [state, setState] = useState({count:4, theme:'blue'});
//   const count = state.count;
//   const theme = state.theme;

//   function decCounter() {
//     setState((prevState) => {
//       return {count:prevState.count -1, theme:"red"};
//     });
//   }

//   function incCounter() {
//     setState((prevState) => {
//       return {count:prevState.count + 1, theme:"red"};
//     });
//   }
  
//   return (
//     <>
//       <button onClick={decCounter}>- or decrement</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incCounter}>+ or Increment</button>
//     </>
//   );
// }

// ReactDOM.render(<UseStateHook/>, document.getElementById('root'));

function UseEffectHook() {

  const [resourceType, setResourceType] = useState('Posts');
  const [items]

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => console.log(json))
  }, [resourceType])

  return (
   <>
    <div>
      <button onClick = {() => { setResourceType(() => { return "Posts"} )}}>Posts</button>
      <button onClick = {() => { setResourceType(() => { return "Users"}) }}>Users</button>
      <button onClick = {() => { setResourceType(() => { return "Comments"}) }}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
   </>
  );

}

ReactDOM.render(<UseEffectHook/>, document.getElementById('root'));


 