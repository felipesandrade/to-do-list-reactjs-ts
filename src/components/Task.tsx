import { useState } from 'react';

import { Trash } from 'phosphor-react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { ITTask } from '../App';

import styles from './Task.module.css';

interface Props {
    task: ITTask;
    onDeleteTask: (content: string) => void;
    onDoneTask: (content: string) => void;
}

export function Task({ task, onDeleteTask, onDoneTask }: Props) {

    function handleTaskComplete() {
        onDoneTask(task.id);
    }

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <div className={styles.task}> 
           <button 
                className={styles.checkContainer} 
                onClick={handleTaskComplete}
            >
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div /> }
           </button>
            <p className={task.isCompleted ? styles.checkText : styles.unckeckedText}>{task.content}</p>
            <Trash 
                className={styles.trash}
                size={24}
                onClick={handleDeleteTask}
            />
        </div>
        
    );
}