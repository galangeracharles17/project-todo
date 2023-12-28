import React from 'react';
import styles from './DeleteTodo.module.scss';
import Modal from '../Modal';
import Button from '../Button';
function DeleteTodo({ id, toggleDelete, handleDeleteTodo }) {
  console.log(id);
  return (
    <Modal id={id} toggleDelete={toggleDelete}>
      <h2>Are you sure?</h2>
      <p>You want to delete this item?</p>
      <div className={styles.buttonsWrapper}>
        <Button
          className={styles.primaryBtn}
          onClick={() => handleDeleteTodo(id)}
        >
          Yes
        </Button>
        <Button
          className={styles.secondaryBtn}
          onClick={() => toggleDelete(id)}
        >
          No
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteTodo;
