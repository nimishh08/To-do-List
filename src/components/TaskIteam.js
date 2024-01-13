import React, { Component } from "react";
import "./TaskIteam.css";
export default class TaskIteam extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.taskIteam.taskname, isEditing: false };
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  deleteTask() {
    this.props.deleteTask(this.props.idx);
  }
  toggleTask() {
    this.props.toggleTask(this.props.idx);
  }
  setIsEditing(editing) {
    this.setState({ isEditing: editing });
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTask(this.props.idx, this.state.task);
    this.setIsEditing(false);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <tr>
          <td colSpan={2}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <button className="save task">Save</button>
              <button
                className="back task"
                onClick={() => this.setIsEditing(false)}
              >
                Back
              </button>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.toggleTask} className="task">
            <input
              type="checkbox"
              readOnly
              checked={this.props.taskIteam.isCompleted}
            />
            <span
              className={
                this.props.taskIteam.isCompleted ? "completed" : "notcompleted"
              }
            >
              {this.props.taskIteam.taskname}
            </span>
          </td>
          <td className="Actions">
            <button
              className="edit task"
              onClick={() => this.setIsEditing(true)}
            >
              Edit
            </button>
            <button className="delete task" onClick={this.deleteTask}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return result;
  }
}
