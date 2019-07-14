import React, { Component } from "react";
import { pipelinePrimaryTopicReference } from "@babel/types";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  //   handleIncrement = () => {
  //     this.setState({ count: ++this.state.counter.value });
  //   };

  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgesClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onClick(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }

  getBadgesClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
