import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';
import todoLogo from '../assets/todo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.imgRocket} src={rocketLogo} alt='Logotipo Rocket' />
            <img className={styles.imgToDo} src={todoLogo} alt='Logotipo ToDO' />
        </header>
    );
}