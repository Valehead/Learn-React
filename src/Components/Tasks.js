import Task from './Task';

const Tasks = ({ tasklist, onDelete }) => {
    return (
        <>
            {tasklist.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks
