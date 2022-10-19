import styles from './Task.module.css';

import  clipboardLogo from '../assets/clipboard.svg';

export function Task() {
    return (
        <article className={styles.task}>
            <header>
                <div className={styles.taskCreated}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.taskDone}>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </header>
            <div className={styles.content}>
                <img className={styles.imgClipboard} src={clipboardLogo} alt="Logo Clipboard" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </article>
    );
}