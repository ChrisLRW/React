// STAR MATCH - V3

const StarsDisplay = props => (
	//we are using JSX to return an arrray of DIVs with key="starId" from 1 through props.count (prop from parent StarMatch where count = stars = random(1,9))
    <>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
);

const PlayNumber = props => (
    // we are using JSX to return a button with className = "number"
    // style using props.statuss --> numberStatus(number) --> function that eventually returns a string --> colors:"used|wrong|candidate|available"
    // onClick is an event Handler that consolelogs the props.number to ensure what youre clicking is correct
	<button 
    className="number" 
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => console.log('Num', props.number)}
  >
    {props.number}
  </button>
);

const StarMatch = () => {
  //candidateNums
  //availableNums
  // in tis mock case.
  // 2, 3 show up as candidates
  // wrong candidates if the number of stars is less than 5
  // blue candidates if the numbers of starsis more than 5
  // 6, 7,8,9 show up as green (used)

  
  // this complete UI logic and we did not do any transactions on the State
  // we set an example and tried to render it based on that specific instance
  
  // now its general form
    // state for candidates (empty since we dont know what are candidates)
  const [candidateNums,setcandidateNums] = useState([]);
    // states for avaialbe numbers (all numbers are available)
  const [availableNums, setavailableNums] =useState(utils.range(1, 9));
    // states for stars on screen (random every time we generate)
  const [stars, setStars] = useState(utils.random(1, 9));
  
  const cadidatesAreWrong = utils.sum(candidateNums) > stars;
  

  // this is a function in StarMatch to return the color we want to render based on logic
  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return cadidatesAreWrong ? 'wrong': 'candidate';
    }
    
      return 'available';
  };
  

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
					<StarsDisplay count={stars}/>
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<PlayNumber 
              key={number} 
              status ={numberStatus(number)}
              number={number}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);


/*

    (param1, param2, …, paramN) => { statements } 
    (param1, param2, …, paramN) => expression
    // equivalent to: => { return expression; }
    
    // Parentheses are optional when there's only one parameter name:
    (singleParam) => { statements }
    singleParam => { statements }
    
    // The parameter list for a function with no parameters should be written with a pair of parentheses.
    () => { statements }

    {} = statements
    () = expression
 
    return is for expressions in general (not new to arrowscript)
*/