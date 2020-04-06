import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";

/*
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
*/
// we are doing this
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard name ={friends[0].name} 
      image={friends[0].image}
      occupation ={friends[0].occupation}
      location = {friends[0].location}/>
      <FriendCard name={friends[1].name} 
      image={friends[1].image}
      occupation ={friends[1].occupation}
      location = {friends[1].location}></FriendCard>
      <FriendCard name ={friends[2].name} 
      image={friends[2].image}
      occupation ={friends[2].occupation}
      location = {friends[2].location}></FriendCard>
    </Wrapper>
  );
}

export default App;
