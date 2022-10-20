import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { List } from './components/List';

import './global.css';

export function App() {

  return (
    <>
        <Header />
        
        <NewTask />

        <List />

    </>
   
  )
}
