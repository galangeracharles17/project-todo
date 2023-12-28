import React from 'react';

import styles from './TodoLists.module.scss';

import Button from '../Button';

import CompleteIcon from '../../Assets/complete-btn.png';
import UpdateIcon from '../../Assets/update-btn.png';
import DeleteIcon from '../../Assets/delete-btn.png';

function TodoLists({
  todo,
  id,
  isCompleted,
  handleCompleteTodo,
  toggleUpdate,
  toggleDelete,
}) {
  return (
    <>
      <div className={styles.todoLists}>
        <IsTodoCompleted isCompleted={isCompleted}>{todo}</IsTodoCompleted>
        <div className={styles.buttonsWrapper}>
          <Button onClick={() => handleCompleteTodo(id)}>
            <img src={CompleteIcon} alt='completed button' />
          </Button>
          <Button onClick={() => toggleUpdate(id)}>
            <img src={UpdateIcon} alt='completed button' />
          </Button>
          <Button onClick={() => toggleDelete(id)}>
            <img src={DeleteIcon} alt='completed button' />
          </Button>
        </div>
      </div>
    </>
  );
}

function IsTodoCompleted({ isCompleted, children }) {
  return (
    <p className={`${styles.todo} ${isCompleted ? styles.completed : ''}`}>
      {children}
    </p>
  );
}

export default TodoLists;
