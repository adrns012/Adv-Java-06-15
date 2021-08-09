import React, { Component } from "react";
import {addTodo} from "../redux/actions/actions"
import {connect} from 'react-redux'
class AddTodo extends Component {
  // constructor(props){
  //     super(props)
  //     this.state={
  //         input:""
  //     }
  //     this.handleSubmit = this.handleSubmit.bind(this);
  // }

  state = {
    input: "",
  };

  handleInputChange = (e) => {
    this.setState({input: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // calling the action to be created to update state in the store.
    this.props.addTodo(this.state.input)
    this.setState({input:""})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          onChange={this.handleInputChange}
          value={this.state.input}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default connect(null, {addTodo})(AddTodo);
