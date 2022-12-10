import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
  };

  handleIncrement = (counter) => {
    const countersArr = [...this.state.counters];
    const index = countersArr.indexOf(counter);
    countersArr[index] = { ...counter };
    countersArr[index].value++;

    this.setState({ counters: countersArr });
  };

  handleDecrement = (counter) => {
    const countersArr = [...this.state.counters];
    const index = countersArr.indexOf(counter);
    countersArr[index] = { ...counter };
    countersArr[index].value--;

    this.setState({ counters: countersArr });
  };

  handleDelete = (counterId) => {
    const countersArr = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: countersArr });
  };

  handleAdd = () => {
    if (Object.keys(this.state.counters).length == 0) {
      const newCounter = { id: 1, value: 0 };
      const countersArr = [newCounter];

      this.setState({ counters: countersArr });
    } else {
      const lastId = this.state.counters[this.state.counters.length - 1].id;
      const newCounter = { id: lastId + 1, value: 0 };
      let countersArr = [...this.state.counters, newCounter];

      this.setState({ counters: countersArr });
    }
  };

  handleReset = () => {
    const countersArr = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: countersArr });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onCounters={this.state.counters} />

        <main className="container">
          <Counters
            onState={this.state}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
