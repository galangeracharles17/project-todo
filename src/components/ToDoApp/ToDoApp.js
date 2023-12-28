import React from 'react';

import AddTodo from '../AddTodo';
import TodoLists from '../TodoLists';
import UpdateTodo from '../UpdateTodo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';

function ToDoApp() {
  const [todos, setTodos] = React.useState([
    {
      id: crypto.randomUUID(),
      todo: 'testToDo',
      isCompleted: false,
      isEdited: false,
      isDeleted: false,
    },
  ]);

  const handleAddTodo = (todoItem) => {
    const AddTodo = {
      id: crypto.randomUUID(),
      todo: todoItem,
      isCompleted: false,
      isEdited: false,
      isDeleted: false,
    };

    const nextTodo = [AddTodo, ...todos];

    setTodos(nextTodo);
  };

  const handleCompleteTodo = (todoId) => {
    const newTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(newTodo);
  };

  const toggleUpdate = (todoId) => {
    const newTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isEdited: !todo.isEdited } : todo
    );

    setTodos(newTodo);
  };

  const handleUpdateTodo = (todoId, newValue) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId
        ? { ...todo, todo: newValue, isEdited: !todo.isEdited }
        : todo
    );

    setTodos(newTodos);
  };

  const toggleDelete = (todoId) => {
    const newTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isDeleted: !todo.isDeleted } : todo
    );

    setTodos(newTodo);
  };

  const handleDeleteTodo = (todoId) => {
    const newTodos = todos
      .filter((todo) => todo.id !== todoId)
      .map((todo) =>
        todo.id === todoId ? { ...todo, isDeleted: !todo.isDeleted } : todo
      );

    console.log(`Toggled isDeleted for todo with id: ${todoId}`);
    setTodos(newTodos);
  };

  // console.log(todos);

  return (
    <>
      <div className='todo-card'>
        <h1>Welcome! Todo</h1>
        <AddTodo handleAddTodo={handleAddTodo} />
        <div className='toDoListWrappers'>
          {todos.map(({ todo, id, isCompleted, isEdited, isDeleted }) => {
            return (
              <React.Fragment key={id}>
                {!isEdited && (
                  <TodoLists
                    id={id}
                    todo={todo}
                    isCompleted={isCompleted}
                    handleCompleteTodo={handleCompleteTodo}
                    toggleUpdate={toggleUpdate}
                    toggleDelete={toggleDelete}
                  />
                )}
                {isEdited && (
                  <UpdateTodo
                    id={id}
                    handleUpdateTodo={handleUpdateTodo}
                    todo={todo}
                  />
                )}
                {isDeleted && (
                  <DeleteTodo
                    id={id}
                    toggleDelete={toggleDelete}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDoApp;
