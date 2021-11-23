import {useState} from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

//React App being exported
const App = () => {
  //state for the addTaskForm to show
  const [showTaskForm, setShowTaskForm] = useState(false);
  //state for the text inside the button
  const [showFormButtonText, setShowFormButtonText] = useState('Add Task');

  //"data" to use in demo. tasklist is an instance of the array, settasks is method to update the array, useState is initilization.
  const [tasklist, setTasks] = useState([
    {
        id: 0,
        text: 'Meeting at School',
        day: 'Nov 10th 2021 at 1:00pm',
        reminder: true,
    },
    {
        id: 1,
        text: 'Meeting at Work',
        day: 'Nov 11th 2021 at 11:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Rip',
        day: 'Nov 12th 2021 at 6:00pm',
        reminder: false,
    }
]);

//show add task form & change the text in the button when clicked
const showAddTaskForm = () => {
  setShowTaskForm(!showTaskForm);
  console.log(showFormButtonText === 'Add Task');
  setShowFormButtonText(showFormButtonText === 'Add Task' ? 'Hide Form' : 'Add Task');
};


//add task to list
const addTask = (task) => {
  //MAKES NEW TASK
  const temp = {id: tasklist.length, ...task};
  //add new task to the tasklist
  setTasks([...tasklist, temp]);
};


//to delete a task
const deleteTask = (id) => {
  setTasks(tasklist.filter((task) => task.id !== id));
};

//to toggle a reminder
const toggleReminder = (id) => {
  setTasks(tasklist.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task));
  // setTasks(tasklist.find((id) => this.id == id) );
};

  return (
    <div className="container">
      <Header onShowForm={showAddTaskForm} showFormButtonText={showFormButtonText} />
      {showTaskForm && <AddTask onSubmit={addTask} />}
      {tasklist.length > 0 ? <Tasks tasklist={tasklist} onDelete={deleteTask} onToggle={toggleReminder}/> : <h4>No Tasks</h4>}
    </div>
  );
}

export default App;
