import React from 'react';
import Button from '../Button';
import styles from './UpdateTodo.module.scss';

function UpdateTodo({ id, handleUpdateTodo, todo }) {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  // To focus whenever the input appears
  React.useEffect(() => {
    inputRef.current.focus();
  });

  const handleForm = (event) => {
    event.preventDefault();

    const newValue = value ? value : todo;

    handleUpdateTodo(id, newValue);
  };

  return (
    <form className={styles.updateForm} onSubmit={handleForm}>
      <input
        pattern='[A-Za-z0-9]+'
        title='Enter a valid word'
        ref={inputRef}
        className={styles.inputUpdate}
        type='text'
        value={value}
        placeholder={todo}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className={styles.buttonWrapper}>
        <Button className={styles.buttonUpdate}>
          {value === '' ? 'cancel' : 'Save'}
        </Button>
      </div>
    </form>
  );
}

export default UpdateTodo;
