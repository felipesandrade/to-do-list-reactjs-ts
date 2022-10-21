import { useState } from 'react';

import { Trash } from 'phosphor-react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './Task.module.css';

interface TaskProps {
    content: string;
    onDeleteTask: (content: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
    const [isCompleted, setIsCompleted] = useState(false);

    function handleTaskComplete() {
        if(!isCompleted) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }

    }

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    return (
        <div className={styles.task}> 
           <button 
                className={styles.checkContainer} 
                onClick={handleTaskComplete}
            >
                {isCompleted ? <BsFillCheckCircleFill /> : <div /> }
           </button>
            <p className={isCompleted ? styles.checkText : ""}>{content}</p>
            <Trash 
                className={styles.trash}
                size={24}
                onClick={handleDeleteTask}
            />
        </div>
        
    );
}