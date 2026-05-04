const TaskItem = ({ task, onDelete }) => {
    return (
        <li className="task-item">
            <span>{task.text}</span>
            <button
                className="delete-btn"
                onClick={() => onDelete(task.id)}
                aria-label="Supprimer"
            >
                ✕
            </button>
        </li>
    );
};

export default TaskItem;