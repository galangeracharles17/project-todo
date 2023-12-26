import React from 'react';
import Button from '../Button';

function UpdateTodo({ id, handleUpdateTodo, todo }) {
  const [value, setValue] = React.useState('');
  console.log(todo);
  const handleForm = (event) => {
    event.preventDefault();

    const newValue = value ? value : todo;

    handleUpdateTodo(id, newValue);
  };

  return (
    <form
      style={{ display: 'flex', gap: '8px', padding: '8px' }}
      onSubmit={handleForm}
    >
      <input
        type='text'
        style={{
          flex: '1',
          border: 'none',
          borderBottom: '1px solid black',
          outline: 'none',
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button style={{ width: '100px' }}>
        {value === '' ? 'cancel' : 'Save'}
      </Button>
    </form>
  );
}

export default UpdateTodo;
