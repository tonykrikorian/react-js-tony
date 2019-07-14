import React, { Component } from "react";
import Counter from "../Counter/counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 6 },
      { id: 3, value: 99 },
      { id: 4, value: 4 }
    ]
  };

  handleDelete = id => {
    console.log("Delete Event", id);
    const filteredCounters = this.state.counters.filter(
      counter => counter.id !== id
    );
    this.setState({ counters: filteredCounters });
  };

  render() {
    if (this.state.counters.length === 0)
      return <p>There are no counters to show</p>;
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
