import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

import './global.css';

export function App() {

  return (
    <>
        <Header />
        
        <NewTask />

        <Task />

    </>
   
  )
}
