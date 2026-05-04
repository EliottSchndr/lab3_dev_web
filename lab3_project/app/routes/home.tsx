import { useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text: any) => {
    const newTask = {
      id: Date.now(),
      text: text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id : any) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
      <div className="container">
        <h1>Ma Todo List</h1>

        <TaskInput onAddTask={addTask} />

        {tasks.length === 0 ? (
            <p className="empty-msg">Aucune tâche pour l'instant.</p>
        ) : (
            <ul className="task-list">
              {tasks.map(task => (
                  <TaskItem
                      key={task.id}
                      task={task}
                      onDelete={deleteTask}
                  />
              ))}
            </ul>
        )}
      </div>
  );
}
