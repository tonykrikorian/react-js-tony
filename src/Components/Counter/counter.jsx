import React, { Component } from "react";
import { pipelinePrimaryTopicReference } from "@babel/types";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ count: ++this.state.value });
  };

  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgesClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }

  getBadgesClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
