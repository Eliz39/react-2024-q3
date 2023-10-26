import { Component } from "react";
import "./SearchComponent.css";

export class SearchComponent extends Component {
  render() {
    return (
      <div className="flex-wrapper">
        <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}
