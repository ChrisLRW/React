// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

// Child: to convert an array of records into an array of card components
const CardList = (props) => (
	//adding variables we pass a key property that is unique for every instatiation (dom node)
  <div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

// Child: to render information about a github profile
class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

// Child: to read input from a user
class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
    event.preventDefault();
    //either AJAX call or axios.
    // change to a template string `` and inject the state.
    // since axios returns promise you must create an async/await style
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    // this prop is grabbing the onSubmit prop passed down from the App component. We are passing the data attr coming from the axios response
    this.props.onSubmit(resp.data);
    // this code resets the user name field after we are done adding a username 
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

// Parent: to manage the relation between children
class App extends React.Component {
  // we are using this new JS feature rather than constructor, super 
  // this initialization allows us to share props/data to our children/components
  state = {
    // initializing the array to zero 
    profiles: [],
  };
  addNewProfile = (profileData) => {
    //invoke state in order to change the state of a react class component. We pass either an object or a function. 
    // what return becomes the new state. We are "spreading" the prevState and then appending the new data profile = similiar to concatenating
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
    // unidirectional flow of data so if we want Form to access data from App we have to pass it thorugh in the parent class
    // The Form component will invoke "addNewProfile" function 
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);