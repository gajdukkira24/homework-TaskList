import React from "react";


class TaskList extends React.Component {

  tasks = [
    { id: 1, text: "Зайнятися спортом" },
    { id: 2, text: "Зробити уроки" },
    { id: 3, text: "Винести сміття" }
  ];

  deleteTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <div>
          <h2>Список задач</h2>

          <ul>
            {this.tasks.map(task => (
              <li key={task.id}>
                {task.text}
                <button onClick={() => this.deleteTask(task.id)}>
                  Видалити
                </button>
              </li>
              
            ))}
          </ul>

        </div>
      </>
    );
  }
}

export default TaskList;