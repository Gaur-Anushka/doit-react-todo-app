import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
            onAddTask({ id: Date.now(), text: task }); // Passing task object with id and text
            setTask(''); // Clear input after adding
        }
    };

    return (
        <div>
            
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter a new task"
                className='enter-task'
                
            />
            <button onClick={handleAddTask} className='add-task' >Add Task</button>
        </div>
    );
};

export default TaskInput;
