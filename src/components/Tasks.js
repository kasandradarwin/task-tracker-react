import { useState } from 'react'

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
         id:1,
         text: 'Doctors Appointment',
         day: 'Feb 5th at 3:30pm',
         reminder: true, 
        },
    
    {
        id:2,
        text: 'Groceries',
        day: 'Feb 5th at 1:30pm',
        reminder: true, 
        },
    
        {
        id:3,
        text: 'Meeting',
        day: 'Feb 5th at2:00pm',
        reminder: true, 
        },
    
        {
        id:4,
        text: 'Ballet',
        day: 'Feb 5th at 2:30pm',
        reminder: false, 
        },
    
    ])
  return (
    <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}

    </>
  )
}
