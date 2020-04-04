class Card extends React.Component{
  render() {
    return (
      <div className="github-profile">
        One GitHub Profile...       
      </div>
    );
  }
}


class App extends React.Component{
  // constructor
  // this 
  
  // the render function is required and we return the virtual DOM
    render() {
      // the reason we return this.props is because for render virtual doms need to have the INSTANT/tick
      return (
        <div>
          <div className="header">{this.props.title}</div>
          <Card/>
        </div>
      );
  }
}


// const App = ({title}) => (
//   <div className="header">{title}</div>
// );

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);