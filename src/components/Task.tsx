import { Trash } from 'phosphor-react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './Task.module.css';

export function Task() {
    const isCompleted = false;

    return (
        <div className={styles.task}> 
           <button className={styles.checkContainer}>
                {isCompleted ? <BsFillCheckCircleFill /> : <div /> }
           </button>
            <p className={isCompleted ? styles.checkText : ""}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash />
        </div>
        
    );
}