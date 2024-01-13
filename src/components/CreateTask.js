import React, { Component } from "react";
import "./CreateTask.css";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="add"> Add Task</button>
        </form>
      </div>
    );
  }
}
