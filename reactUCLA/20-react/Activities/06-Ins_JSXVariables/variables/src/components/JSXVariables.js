import React from "react";

const name = "Chris";
const thoughts = "is really cool"



const stripVowels = (str) =>{
  const vowels =["a", "e", "i", "o", "u"];
  let result = "";

  for(let i = 0; i < str.length;i++){
    // for each letter in the str check if it is included in the vowels string array
    // if it doesnt include it then push to the new array result
    if(!vowels.includes(str[i].toLowerCase())){
      result += str[i];
    }
  }
  return result;
}

  // This is how they did it ^ I would like to try it with a .map()


function JSXVariables() {

  // I can just do name.length

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>My name without vowels is {stripVowels(name)} </h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
