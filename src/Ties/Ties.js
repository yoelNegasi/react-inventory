import { Component } from "react";
import "./ties.css";

class Ties extends Component {
  render(props) {
    let startCount = this.props.startCount;
    let IdealCount = this.props.IdealCount;
    let difference = IdealCount - startCount;

    return (
      <div>
        <h1>Ties</h1>
        <div className="ties">
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

export default Ties;
