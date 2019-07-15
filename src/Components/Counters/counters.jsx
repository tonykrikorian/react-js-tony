import React, { Component } from "react";
import Counter from "../Counter/counter";

class Counters extends Component {
  render() {
    if (this.props.counters.length === 0)
      return <p>There are no counters to show</p>;
    return (
      <div>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onClick={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
