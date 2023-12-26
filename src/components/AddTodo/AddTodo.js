import React from 'react';
import styles from './AddTodo.module.scss';
import Button from '../Button';
import AddIcon from '../../Assets/add-btn.png';

function AddTodo({ handleAddTodo }) {
  const [todoValue, setTodoValue] = React.useState('');

  const handleForm = (event) => {
    event.preventDefault();
    handleAddTodo(todoValue);

    setTodoValue('');
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
      }}
      onSubmit={handleForm}
    >
      <input
        required
        type='text'
        value={todoValue}
        className={styles.addInput}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
      />
      <Button>
        <img src={AddIcon} alt='add button' />
      </Button>
    </form>
  );
}

export default AddTodo;
