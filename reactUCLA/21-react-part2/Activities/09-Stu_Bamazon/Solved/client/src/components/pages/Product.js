import React from "react";
import axios from "axios";

class Product extends React.Component {
  state = {
    item: {}
  };

  componentDidMount() {
    // grab the id (upc) from the url
    // because this is a stateful component, we must use "this.props"
    axios.get(`/api/products/${this.props.match.params.id}`).then((response) => {
      this.setState({
        item: response.data
      });
    });
  }

  buyOne = () => {
    // make a put request to subtract one from quantity
    axios.put(`/api/products/${this.props.match.params.id}`).then((response) => {
      // update state object with newest data
      this.setState({
        item: response.data
      });
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">{this.state.item.name}</div>
        <div className="card-body">
          <p>{this.state.item.description}</p>
          <p>Qty: {this.state.item.quantity}</p>

          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={this.buyOne}
            disabled={this.state.item.quantity <= 0}
          >
            Buy One
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
