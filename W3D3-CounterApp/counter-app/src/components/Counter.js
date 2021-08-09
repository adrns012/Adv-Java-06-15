import React, { Component } from "react";
import {connect} from 'react-redux'
import {increment, decrement} from "../redux/actions"
class Counter extends Component {
  // const = [count, setCount] = useState(0)
//   state = {
//     count: 0,
//   };
  

  handleIncrument = () => {
    //   setCount(count+1)
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.props.increment(this.props.count)
    // this.props.dispatch({type: 'INCREMENT'})

  };

  handleDecrement = () =>{
    //   this.setState({
    //       count: this.state.count -1
    //   })
    // this.props.dispatch({type: 'DECREMENT'})
    this.props.decrement(this.props.count)
  }

  

  render() {
    console.log('count',this.props.count)
    return (
      <div>
        <span>Count:{this.props.count}</span>
        <button onClick={this.handleIncrument}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps,{increment, decrement})(Counter);
