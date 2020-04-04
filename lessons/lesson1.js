function logRandom() {
  console.log(Math.random());
}


function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={() => setCounter(counter + 1)}> {counter}</button>
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);

//  ==== Arrow Functions Refresher ====

console.log(this);
const testerObj = {
  
  // this is returning the tester object itself
  func1: function() {
    console.log('func1', this);
  },
  
  // this is asscoiated with the same keyword in the functions scope when it was defined 
  func2: () => {
    console.log('func2',this);
  }
  
};

testerObj.func1();
testerObj.func2();