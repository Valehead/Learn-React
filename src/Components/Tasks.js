import Task from './Task';

const Tasks = ({ tasklist, onDelete, onToggle }) => {
    return (
        <>
            {tasklist.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
