import React, { useState } from "react";


const resulte = {
  1 :"Friends",
  2 : "Love",
  3 : "Affection",
  4 : "Marriage",
  5 : "Enemy",
  0 : "Siblings",
}

const App = () => {
const [boy,setBoy] = useState('')
const[girl,setgirl]= useState('')
const [anser,setAnser]= useState('')
function fua(){
  let b = boy;
  let g = girl;
  let c ='';
  for(let i of b){
    if(!girl.includes(i)){
    c+=i;
    }
  } 
  for(let i of g){
    if(!boy.includes(i))
      c+=i;
  }
  let z = c.length%6;
setAnser(resulte[z])
}
  return (
    <div>
      <h1>FLAMES  APP...</h1>
      <input data-testid="input1" name="name1" placeholder="Enter first name" value={boy}
      onChange={(e)=>setBoy(e.target.value)}
      />
      <input
        data-testid="input2"
        name="name2"
        placeholder="Enter second name"
        value={girl}
      onChange={(e)=>setgirl(e.target.value)}
      />
      <button
        data-testid="Calculate_relationship"
        name="calculate_relationship" onClick={()=>{
        fua()
        }}
      >
        calculater relation futer
      </button>
      <button data-testid="clear" name="clear" onClick={()=>{
        setBoy('');
        setgirl('');
        setAnser('');
      }}>
        clear
      </button>
      <h3>{anser}</h3>
    </div>
  );
};

export default App;
