import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state ={
    friends
  };

  removeFriend = id=>{
    // if it says friend.id == id the one clicked is the only one saved
    // arr.filter((props) => cb()) it will call the cb function in each array
    const friends = this.state.friends.filter(friend=> friend.id != id);
    this.setState({ friends});
  }

  render(){
    // this is where we render each card via a map
    // go through each id in the friends.json object array with this.state.friends.map
    // "friend" is the prop and make sure it is equal to each index of your array
    return (
      <Wrapper>
        <Title></Title>
        {this.state.friends.map(friend => (        
        <FriendCard
          removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />))}

      </Wrapper>
    );
  }
}

export default App;
