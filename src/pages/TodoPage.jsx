import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react';

import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todos';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleAddTodo = async () => {
    if (inputValue.length === 0) return;
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            title: data.title,
            isDone: data.isDone,
            id: data.id,
            isEdit: false,
          },
        ];
      });
      setInputValue(''); // 新增完一項要重製輸入欄位
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyDown = async () => {
    if (inputValue.length === 0) return;
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            title: data.title,
            isDone: data.isDone,
            id: data.id,
            isEdit: false,
          },
        ];
      });
      setInputValue(''); // 新增完一項要重製輸入欄位
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggleDone = async (id) => {
    const selectTodo = todos.find((todo) => todo.id === id);
    try {
      await patchTodo({ id, isDone: !selectTodo.isDone });
      setTodos((todos) => {
        return todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) return { ...todo, isEdit: isEdit };
        return { ...todo, isEdit: false };
      });
    });
  };
  const handleSave = async ({ id, title }) => {
    try {
      await patchTodo({ id, title });
      setTodos((todos) => {
        return todos.map((todo) => {
          if (todo.id === id) return { ...todo, title: title, isEdit: false };
          return todo;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete =async  (id) => {
    try {
      await deleteTodo(id);
      setTodos((todos) => {
        return todos.filter((todo) => {
          return todo.id !== id;
        });
      });
    } catch (error) {
      console.log(error)
    }
    
    
  };

  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(
          todos.map((todo) => {
            return { ...todo, isEdit: false };
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };
    getTodosAsync();
  }, []);
  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer count={todos.length} />
    </div>
  );
};

export default TodoPage;
