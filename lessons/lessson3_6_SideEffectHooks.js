// STAR MATCH - V6

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

const PlayNumber = props => (
  <button
    className="number"
    style={{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

const PlayAgain = props => (
  <div className="game-done">
    <div
      className="message"
      style ={{ color: props.gameStatus === 'lost' ? 'red': 'green'}}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div> 
      <button onClick={props.onClick}>Play Again</button>
	</div>
);

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  // setInterval invokes every time params, setTimeout invokes once after times param is the JS function that can countdown 
  // useEffect(); is another hook in React - this allows you to perform side effects in function components
  // React that your component needs to do something after render. React will remember the function you passed = "Effect"
  // it renders first aand after every udpate

  useEffect(() => {
    // console.log('Rendered...');
    // so creating this effect introduces bug that we may not be aware of since
    // every click it irs rendering a timer and we may not even notice

  
    if (secondsLeft > 0 && availableNums.length > 0 ) {
      const timerID = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      // this cleans up our timer effect so that for every new render we are calling a new timer not the same one (which could cause bugs) 
      // setimeOut returns its own timerID every render
      //console.log(timerID)
      
      // GET INTO the habit of CLEANING UP YOUR EFFECTS
      return () => clearTimeout(timerID)
    }
  
    //console.log('Component is rendering')
    // this is how you CLEAN up the effect 
    // react will invoke this function when its about to unmount/rerender the function
    //return () => console.log('Component is going to rerender');
  });

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  //const gameIsWon = availableNums.length === 0;
  //const gameIsLost = secondsLeft ==== 0;
  // we can use one varaible to capture both (gameStatus)
  // jscomplete.com/no-ifs to review the ?
  const gameStatus = availableNums.length === 0 
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'
  
  
  const resetGame = () => {
  	setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
  };

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

		const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
          	<PlayAgain onClick={resetGame} gameStatus={gameStatus}/>
          ) : (
          	<StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => (
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
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
  range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

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