import styles from './List.module.css';

import  clipboardLogo from '../assets/clipboard.svg';

export function List() {
    return (
        <article className={styles.list}>
            <header>
                <div className={styles.listCreated}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.listDone}>
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