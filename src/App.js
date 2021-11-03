import {useState} from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

const App = () => {
  const [tasklist, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting at School',
        day: 'Nov 10th 2021 at 1:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Work',
        day: 'Nov 11th 2021 at 11:00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Meeting at Rip',
        day: 'Nov 12th 2021 at 6:00pm',
        reminder: false,
    }
]);

const deleteTask = (id) => {
  setTasks(tasklist.filter((task) => task.id !== id))
};

  return (
    <div className="container">
      <Header />
      {tasklist.length > 0 ? <Tasks tasklist={tasklist} onDelete={deleteTask}/> : <h4>No Tasks</h4>}
    </div>
  );
}

export default App;
