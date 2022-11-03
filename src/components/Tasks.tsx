import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';
import clipboardLogo from '../assets/clipboard.svg';

import { Task } from './Task';

import styles from './Tasks.module.css';

export function Tasks() {
    const [tasks, setTasks] = useState(['']);

    const [newTask, setNewTask] = useState('');

    const [countTasks, setCountTasks] = useState(0);

    const [countDoneTasks, setCountDoneTasks] = useState(0);

    function handleCreateNewTask (event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTask]);

        setCountTasks((state) => {
            return state + 1;
        });

        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function onDeleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task !== taskToDelete;
        });

        setCountTasks((state) => {
            return state - 1;
        });

        setTasks(tasksWithoutDeleteOne);

    }

    function onDoneTask(taskToDone: boolean) {
        if(taskToDone) {
            setCountDoneTasks(state => {
                return state + 1;
            });
        } else {
            setCountDoneTasks(state => {
                return state - 1;
            });
        }
        
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
                        if(tasks.length === 1) {
                            return <div className={styles.content}>
                                        <img className={styles.imgClipboard} src={clipboardLogo} alt="Logo Clipboard" />
                                        <strong>Você ainda não tem tarefas cadastradas</strong>
                                        <span>Crie tarefas e organize seus itens a fazer</span>
                                    </div>
                        } else {
                            if(task !== '') {
                                return <Task 
                                            key={task}
                                            content={task}
                                            onDeleteTask={onDeleteTask}
                                            onDoneTask={onDoneTask}
                                        />
                            }      
                        }
                    })}
                </div>
            </article>
        </>
    );
}