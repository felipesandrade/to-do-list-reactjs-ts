import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './Task.module.css';

export function Task() {
    const [isCompleted, setIsCompleted] = useState(false);

    function handleTaskCompleted() {
        if(!isCompleted) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }

    }

    return (
        <div className={styles.task}> 
           <button 
                className={styles.checkContainer} 
                onClick={handleTaskCompleted}
            >
                {isCompleted ? <BsFillCheckCircleFill /> : <div /> }
           </button>
            <p className={isCompleted ? styles.checkText : ""}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash 
                className={styles.trash}
                size={24}
            />
        </div>
        
    );
}