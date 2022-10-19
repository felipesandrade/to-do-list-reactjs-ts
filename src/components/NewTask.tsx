import styles from './NewTask.module.css';

import { PlusCircle } from 'phosphor-react';

export function NewTask() {
    function handleCreateNewTask () {

    }
    return (
        <div className={styles.newtask}>
            <form onSubmit={handleCreateNewTask}>
                <input type='text' placeholder='Adicine uma nova tarefa'/>
                
                <button type='submit'>
                    <span>Criar <PlusCircle size={16} /></span>
                </button>
            </form>
        </div>
    );
}