import React, { Component } from "react";

import ListItem from "./components/ListItem/ListItem.js";
import plusItem from "./components/ListItem/plusItem.js";

class App extends Component {
  render() {
    return (
      <main class="content">
        <h1>Retro Board</h1>
        <div class="RetroBoard">
          <div class="RetroBoardCategory RetroBoardCategory-1">
            <h2>Went Well</h2>
            <button type="button" class="button button-new">
              <span class="sr-only">Add to "Went Well"</span>+
            </button>
            <div class="Retro">
              <label class="sr-only" for="retro-label-1">
                Enter retro text
              </label>
              <textarea
                id="retro-label-1"
                class="textbox"
                placeholder="Enter text here"
                rows="1"
              >
                Sleeping while sitting up.
              </textarea>
              <div class="ButtonGroup">
                <button type="button" class="button button-left">
                  <span class="sr-only">Move Left</span>&lt;
                </button>
                <ListItem type="button" class="button button-delete">
                  <span class="sr-only">Delete</span>×
                </ListItem>
                <button type="button" class="button button-right">
                  <span class="sr-only">Move Right</span>&gt;
                </button>
              </div>
            </div>
            <div class="Retro">
              <label class="sr-only" for="retro-label-6">
                Enter retro text
              </label>
              <textarea
                id="retro-label-6"
                class="textbox"
                placeholder="Enter text here"
                rows="1"
              />
              <div class="ButtonGroup">
                <button type="button" class="button button-left">
                  <span class="sr-only">Move Left</span>&lt;
                </button>
                <ListItem type="button" class="button button-delete">
                  <span class="sr-only">Delete</span>×
                </ListItem>
                <button type="button" class="button button-right">
                  <span class="sr-only">Move Right</span>&gt;
                </button>
              </div>
            </div>
          </div>

          <div class="RetroBoardCategory RetroBoardCategory-2">
            <h2>To Improve</h2>
            <button type="button" class="button button-new">
              <span class="sr-only">Add to "To Improve"</span>+
            </button>
            <div class="Retro">
              <label class="sr-only" for="retro-label-2">
                Enter retro text
              </label>
              <textarea
                id="retro-label-2"
                class="textbox"
                placeholder="Enter text here"
                rows="1"
              >
                Time Management
              </textarea>
              <div class="ButtonGroup">
                <button type="button" class="button button-left">
                  <span class="sr-only">Move Left</span>&lt;
                </button>
                <ListItem type="button" class="button button-delete">
                  <span class="sr-only">Delete</span>×
                </ListItem>
                <button type="button" class="button button-right">
                  <span class="sr-only">Move Right</span>&gt;
                </button>
              </div>
            </div>
            <div class="Retro">
              <label class="sr-only" for="retro-label-3">
                Enter retro text
              </label>
              <textarea
                id="retro-label-3"
                class="textbox"
                placeholder="Enter text here"
                rows="1"
              >
                Finishing this project
              </textarea>
              <div class="ButtonGroup">
                <button type="button" class="button button-left">
                  <span class="sr-only">Move Left</span>&lt;
                </button>
                <ListItem type="button" class="button button-delete">
                  <span class="sr-only">Delete</span>×
                </ListItem>
                <button type="button" class="button button-right">
                  <span class="sr-only">Move Right</span>&gt;
                </button>
              </div>
            </div>
          </div>

          <div class="RetroBoardCategory RetroBoardCategory-3">
            <h2>Action Items</h2>
            <plusItem type="button" class="button button-new">
              <span class="sr-only">Add to "Action Items"</span>+
            </plusItem>
            <div class="Retro">
              <label class="sr-only" for="retro-label-4">
                Enter retro text
              </label>
              <textarea
                id="retro-label-4"
                class="textbox"
                placeholder="Enter text here"
                rows="1"
              >
                Complete this
              </textarea>
              <div class="ButtonGroup">
                <button type="button" class="button button-left">
                  <span class="sr-only">Move Left</span>&lt;
                </button>
                <ListItem type="button" class="button button-delete">
                  <span class="sr-only">Delete</span>x
                </ListItem>
                <button type="button" class="button button-right">
                  <span class="sr-only">Move Right</span>&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
