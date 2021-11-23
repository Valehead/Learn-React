import {useState} from 'react';


const AddTask = ({onSubmit}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    
    const [inputRef, setInputFocus] = useFocus();

    const onAdd = (e) => {
        //prevents normal form submit
        e.preventDefault();

        //bad validation
        if(!text){
            alert('Please Enter Task Text!');
            return;
        };
        //passes the new task data up the app
        onSubmit({text, day, reminder});

        //resets form
        setText('');
        setDay('');
        setReminder(false);

    };

    return (
        <form className='add-form' onSubmit={onAdd}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} autoFocus
                 onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Set Day & Time' value={day}
                 onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder}
                checked={reminder}
                 onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask
