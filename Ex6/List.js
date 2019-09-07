import React from "react";

export default class List extends React.Component {
  render() {
    return (
      <ul className="list-group" onClick={this.props.onButtonClick}>
        {this.props.numbers.map(number => (
          <li className="list-group-item d-flex justify-content-between" key={number}>
            <button type="button" className="btn btn-block btn-outline-danger mr-2">
                {number}
            </button>
            <button type="button" className="btn btn-block btn-outline-success">
                {number * 2}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
