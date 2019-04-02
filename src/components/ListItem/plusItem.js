import React, { Component } from "react";
import ListItem from "./ListItem.js";

class plusItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }

  render() {
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form onSubmit={this.addItem} className="form-group">
            <div className="input-group mb-3">
              <input
                ref={a => (this._inputElement = a)}
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-add"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
          <ListItem entries={this.state.items} />
        </header>
        <ul className="list-group">{/* Put ListItems in here */}</ul>
      </div>
    );
  }
}

export default plusItem;
