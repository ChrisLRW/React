// STAR MATCH - V8

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
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
    >
  	  {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
  	</div>
	  <button onClick={props.onClick}>Play Again</button>
	</div>
);


// Custom Hook: we are going to group the hooks we have 
// we are using the name convention "use..." for these customs
// # 1 rule : dont call hooks inside loop or conditions. the key word "use" utilize this custo rule so that it forces us not to conditionalize them

// this custom hook thats an arrow function which manages/intializes the state and transact on the state depending on behaviour (setGameState). we basically copiedthe code from before and put it in a custom Hook 
// we are returning the states so that we can invoke them in the Game component
const useGameState = () => {
  
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    });
  
    const setGameState = (newCandidateNums) => {
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
    }
    
  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};



// Game does 3 main things:
// 1.) Manage states (initializing and setting values on the state, defining and cleaning up side effects and also transactions) 2.) making some computations based on the state 3.) rendering the state
// we have shortened everything for Game component by extracting onto a custom hook 

const Game = (props) => {
//   const [stars, setStars] = useState(utils.random(1, 9));
//   const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
//   const [candidateNums, setCandidateNums] = useState([]);
//   const [secondsLeft, setSecondsLeft] = useState(10);

// 	useEffect(() => {
//   	if (secondsLeft > 0 && availableNums.length > 0) {
//       const timerId = setTimeout(() => {
// 	      setSecondsLeft(secondsLeft - 1);
//       }, 1000);
//     	return () => clearTimeout(timerId);
//   	}
//   });
  
  // here we are "destructuring" the return ojects in useGameState. so that everyting works in the local scope of the game component
  
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } =useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 
  	? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'

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

    // if (utils.sum(newCandidateNums) !== stars) {
    //   setCandidateNums(newCandidateNums);
    // } else {
    //   const newAvailableNums = availableNums.filter(
    //     n => !newCandidateNums.includes(n)
    //   );
    //   setStars(utils.randomSumIn(newAvailableNums, 9));
    //   setAvailableNums(newAvailableNums);
    //   setCandidateNums([]);
    // }
    
    // instead of the code above we are just invoking the function returned from useGameState custom hook called setGameState and passing in the newCandidateNums variable to handle the transactions
    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
          	<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
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

const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

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