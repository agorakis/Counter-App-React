import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-sm m-3"
        >
          Add
        </button>

        <button
          onClick={this.props.onReset}
          className="btn btn-success btn-sm m-3"
        >
          Reset
        </button>

        {this.props.onState.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
