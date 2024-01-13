import React, { Component } from "react";
import TaskIteam from "./TaskIteam";
import "./TaskList.css";
export default class TaskList extends Component {
  render() {
    return (
      <div>
        <table className="ToDoList">
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((t, index) => {
              return (
                <TaskIteam
                  key={index}
                  idx={index}
                  taskIteam={t}
                  deleteTask={this.props.deleteTask}
                  editTask={this.props.editTask}
                  toggleTask={this.props.toggleTask}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
