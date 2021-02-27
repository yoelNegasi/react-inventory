import React, { Component } from "react";
import "./Suit.css";

class Suit extends Component {
  render(props) {
    console.log(props);
    let startCount = this.props.startCount;
    let IdealCount = this.props.IdealCount;
    let difference = IdealCount - startCount;
    console.log(difference);
    return (
      <div>
        <h1>Suit</h1>
        <div className="suit">
          <div>
            <h2>StartCount : {this.props.startCount}</h2>
          </div>
          <div>
            <h2>IdeaCount : {this.props.IdealCount}</h2>
          </div>
          <div>
            <h2>Difference : {difference}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Suit;
