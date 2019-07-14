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

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    if (this.state.counters.length === 0)
      return <p>There are no counters to show</p>;
    return (
      <div>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onClick={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
