// STAR MATCH - V4

const StarsDisplay = props => (
	<>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
);

const PlayNumber = props => (
	<button 
  	className="number"
    style={{ backgroundColor: colors[props.status] }}
    // instead of console logging we are going to invoke the behaviour of "onClick"
    //we are passing the props: status and number from the parent
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

const PlayAgain = props => (
  // so PlayAgain will receive "resetGame" as a prop from its parent and then now you have to INVOKe
  // onClick (the prop) through onClikc (the event handler)
  <div className ="game-done">
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

const StarMatch = () => {
	const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCanditateNums] = useState([]);
  
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  // if the length of availablenums is zero there are no available numbers left -> play again?
  const gameIsDone = availableNums.length === 0;
  
  // we are reintializing the game by resseting the states back to normal
  // method 1 (easy quick version) but if there are SIDE effects (i.e timers) we would have to do it differently
  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCanditateNums([]);
    
  };
  
  const numberStatus = (number) => {
  	if (!availableNums.includes(number)) {
    	return 'used';
    }
    if (candidateNums.includes(number)) {
    	return candidatesAreWrong ? 'wrong': 'candidate';
    }
    return 'available';
  };
  
  // Transactions
  // logic that will happen on each number clicked
  const onNumberClick = (number, currentStatus) => {
    // currentStatus => newStatus
    // if the current number clicked is being used (it shuoldnt work)
    if (currentStatus == 'used') {
      return;
    }
    // if its a candidate number we are appending it to candidateNums array
    // if we are available then add the number but if not that we filter it out byclicking on it again
    const newCandidateNums = 
            currentStatus === 'available' 
            ? candidateNums.concat(number)
            : candidateNums.filter(cn => cn !== number);
            
    // if the new candidiate arrays does not equal the sum of stars (respondent) added incorrectly
    if (utils.sum(newCandidateNums) !== stars ) {
      setCanditateNums(newCandidateNums);
    } else{
      // sum of candidate numbers equal sum of stars = correct pick
      // this filter is trying to see if the available number "n" is included in the candidateNums
      // if the number is not avaialale in the newCandidate numbers then keep it. otherwise remove it
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      
      //redraw stars (from whats available)
      setStars(utils.randomSumIn(newAvailableNums, 9));
      
      // seting a new state through hooks
      setAvailableNums(newAvailableNums);
      setCanditateNums([]);
      
    }
  }
  
  return (
    //so you cna do {availableNums.length ==== 0 ?} as the condition to restart the game but doing computations here is not good for readability
    // so instead we do {gameisDone}
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
            <PlayAgain onClick={resetGame}/>
          ) : (
            <StarsDisplay count={stars}/>
          )}
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<PlayNumber 
            	key={number} 
              status={numberStatus(number)}
              number={number}
              //new prop that we want to pass to the PlayNumber component
              onClick={onNumberClick}
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