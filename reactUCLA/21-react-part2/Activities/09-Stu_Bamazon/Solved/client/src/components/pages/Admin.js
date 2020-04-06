import React from "react";
import axios from "axios";

class Admin extends React.Component {
  // initial form state
  state = {
    name: "",
    description: "",
    upc: "",
    quantity: 1
  };

  handleInputChange = (event) => {
    // update any state property with the input value of the same name
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitProduct = (event) => {
    event.preventDefault();

    // send the entire state object to the back-end
    axios.post("/api/product", this.state).then((response) => {
      if (response.data === true) {
        // clear state/input values
        this.setState({
          name: "",
          description: "",
          upc: "",
          quantity: 1
        });
      }
      // mongoose validation failed
      else {
        alert("Error. Product was not created.");
      }
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitProduct}>
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Product Name"
          className="form-control"
        />
        <textarea
          value={this.state.description}
          name="description"
          onChange={this.handleInputChange}
          placeholder="Product Description"
          className="form-control mt-2"
        />
        <input
          value={this.state.upc}
          name="upc"
          onChange={this.handleInputChange}
          type="text"
          placeholder="UPC Code"
          className="form-control mt-2"
        />
        <input
          value={this.state.quantity}
          name="quantity"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Qty"
          className="form-control mt-2"
        />
        <button className="btn btn-outline-primary mt-2">Add Product</button>
      </form>
    );
  }
}

export default Admin;
