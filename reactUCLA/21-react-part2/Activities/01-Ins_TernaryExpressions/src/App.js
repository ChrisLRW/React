import React from "react";

const App = () => {
  // use a "ternary expression" to assign a jsx element to variable pTag
  let pTag = Math.random() > .5 ? <p>hello</p> : <p>goodbye</p>;

  // this is shorthand for writing out an if/else statement:
  if (Math.random() > .5) {
    pTag = <p>hello</p>;
  }
  else {
    pTag = <p>goodbye</p>;
  }

  return (
    <div>
      {/* we can define jsx elements beforehand and insert them as variables below */}

      {pTag}

      {/* or, because ternary expressions return a value, anyway, we can use them directly in our JSX code */}

      {Math.random() > .5 ? <p>hello</p> : <p>goodbye</p>}
    </div>
  )
};

export default App;
