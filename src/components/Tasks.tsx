import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import clipboardLogo from '../assets/clipboard.svg';

import { Task } from './Task';
import { ITTask } from '../App';


import styles from './Tasks.module.css';

interface Props {
  tasks: ITTask[];
  onCreateNewTask: (taskContent: string) => void; 
  onDeleteTask: (content: string) => void;
  onDoneTask: (content: string) => void;
}

export function Tasks({ tasks, onCreateNewTask, onDeleteTask, onDoneTask }: Props) {

    const countTasks = tasks.length;

    let countDoneTasks = 0;
    
    const doneTasks = tasks.forEach(task => {
        if(task.isCompleted === true) {
            countDoneTasks += 1;
        };
    });

    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask( event: FormEvent ) {
        event.preventDefault();

        onCreateNewTask(newTask);

        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');

        setNewTask(event.target.value);
    }

    function handleOnDelete(TaskToDelete: string) {
        onDeleteTask(TaskToDelete);
    }

    function handleDoneTask(TaskToDone: string) {
        onDoneTask(TaskToDone);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    return (
        <>
            <div className={styles.newtask}>
                        <form onSubmit={handleCreateNewTask}>
                            <input 
                                type='text' 
                                placeholder='Adicine uma nova tarefa'
                                value={newTask}
                                onChange={handleNewTaskChange}
                                onInvalid={handleNewTaskInvalid}
                                required={true}
                            />
                            
                            <button type='submit'>
                                <span>Criar <PlusCircle size={16} /></span>
                            </button>
                        </form>
                    </div>
            <article className={styles.tasks}>
                <header>
                    <div className={styles.tasksCreated}>
                        <strong>Tarefas criadas</strong>
                        <span>{countTasks}</span>
                    </div>
                    <div className={styles.tasksDone}>
                        <strong>Concluídas</strong>
                        <span>{countDoneTasks !== 0 ? `${countDoneTasks} de ${countTasks}` : `0 de ${countTasks}`}</span>
                    </div>
                </header>
                <div>
                    {tasks.map(task => {
                        if(tasks.length === 0) {
                            return <div key={task.id} className={styles.content}>
                                        <img className={styles.imgClipboard} src={clipboardLogo} alt="Logo Clipboard" />
                                        <strong>Você ainda não tem tarefas cadastradas</strong>
                                        <span>Crie tarefas e organize seus itens a fazer</span>
                                    </div>
                        } else {
                            if(tasks.length !== 0) {
                                return <Task 
                                           key={task.id}
                                           task={task}
                                           onDeleteTask={handleOnDelete}
                                           onDoneTask={handleDoneTask}
                                        />
                            }      
                        }
                    })}
                </div>
            </article>
        </>
    );
}