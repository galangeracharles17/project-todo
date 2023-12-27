import React from 'react';

import DeleteIcon from '../../Assets/delete-btn.png';

import Button from '../Button';

function DeleteTodo() {
  const [isDelete, setIsDelete] = React.useState(false);

  const handleDelete = React.useCallback(() => {
    setIsDelete((currentValue) => !currentValue);
  }, []);
  console.log(isDelete);

  return (
    <Button onClick={handleDelete}>
      <img src={DeleteIcon} alt='delete button' />
    </Button>
  );
}

export default DeleteTodo;
