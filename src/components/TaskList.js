import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (task) => {
    // Filter out the task with the given text and category
    const updatedTasks = tasks.filter(
      (t) => t.text !== task.text && t.category !== task.category
    );
    // Update the tasks
    // You can also use a state management library like Redux for this
    // but for this example, we're just using useState in App to update tasks
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;