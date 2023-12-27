import React from 'react';

import AddTodo from '../AddTodo';
import TodoLists from '../TodoLists';
import UpdateTodo from '../UpdateTodo';

function ToDoApp() {
  const [todos, setTodos] = React.useState([
    {
      id: crypto.randomUUID(),
      todo: 'testToDo',
      isComplete: false,
      isEdited: false,
    },
  ]);

  const handleAddTodo = (todoItem) => {
    const AddTodo = {
      id: crypto.randomUUID(),
      todo: todoItem,
      isComplete: false,
      isEdited: false,
    };

    const nextTodo = [AddTodo, ...todos];

    setTodos(nextTodo);
  };

  const handleCompleteTodo = (todoId) => {
    const newTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
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

  const handleDeleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <div className='todo-card'>
      <h1>Welcome! Todo</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <div className='toDoListWrappers'>
        {todos.map(({ todo, id, isComplete, isEdited }) => {
          return (
            <React.Fragment key={id}>
              {!isEdited && (
                <TodoLists
                  //Todo Id
                  id={id}
                  todo={todo}
                  isComplete={isComplete}
                  handleCompleteTodo={handleCompleteTodo}
                  toggleUpdate={toggleUpdate}
                  handleDeleteTodo={handleDeleteTodo}
                />
              )}
              {isEdited && (
                <UpdateTodo
                  id={id}
                  handleUpdateTodo={handleUpdateTodo}
                  todo={todo}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoApp;
