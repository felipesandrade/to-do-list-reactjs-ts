import { FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './global.css';
export interface ITTask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<ITTask[]>([]);

  function handleCreateNewTask (taskContent: string) {

    setTasks([
      ...tasks, 
      {
        id: uuidv4(),
        content: taskContent,
        isCompleted: false
      }
    ]);

  }

  function handleOnDelete(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
        return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeleteOne);

  }

  function handleDoneTask(taskToDone: string) {
        const taskIndex = tasks.findIndex((task) => {
          return task.id === taskToDone;
        });

        const tempTasks = [...tasks];

        tempTasks[taskIndex].isCompleted = !tempTasks[taskIndex].isCompleted;
        
        setTasks(tempTasks);
    
  }

  return (
    <>
        <Header />

        <Tasks 
          tasks={tasks}
          onCreateNewTask={handleCreateNewTask}
          onDeleteTask={handleOnDelete}
          onDoneTask={handleDoneTask}
        />
          
    </>
   
  )
}
