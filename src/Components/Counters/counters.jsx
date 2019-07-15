import React, { Component } from "react";
import Counter from "../Counter/counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDelete } = this.props;
    if (counters.length === 0) return <p>There are no counters to show</p>;
    return (
      <div>
        <button className="btn btn-warning btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onClick={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
