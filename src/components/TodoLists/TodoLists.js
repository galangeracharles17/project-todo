import React from 'react';

import styles from './TodoLists.module.scss';

import Button from '../Button';

import CompleteIcon from '../../Assets/complete-btn.png';
import UpdateIcon from '../../Assets/update-btn.png';

function TodoLists({ todo, id, isComplete, handleCompleteTodo, toggleUpdate }) {
  return (
    <>
      <div className={styles.todoLists}>
        <IsTodoCompleted isComplete={isComplete}>{todo}</IsTodoCompleted>
        <div className={styles.buttonsWrapper}>
          <Button onClick={() => handleCompleteTodo(id)}>
            <img src={CompleteIcon} alt='completed button' />
          </Button>
          <Button onClick={() => toggleUpdate(id)}>
            <img src={UpdateIcon} alt='completed button' />
          </Button>
          <Button>
            <img src={UpdateIcon} alt='completed button' />
          </Button>
        </div>
      </div>
    </>
  );
}

function IsTodoCompleted({ isComplete, children }) {
  return (
    <p className={`${styles.todo} ${isComplete ? styles.completed : ''}`}>
      {children}
    </p>
  );
}

export default TodoLists;
