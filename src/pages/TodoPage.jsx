import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';
const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleAddTodo = () => {
    if (inputValue.length === 0) return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          title: inputValue,
          isDone: false,
          id: prevTodos.count + 1,
        },
      ];
    });
    setInputValue(''); // 新增完一項要重製輸入欄位
  };
  const handleKeyDown = () => {
    if (inputValue.length === 0) return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          title: inputValue,
          isDone: false,
          id: prevTodos.length + 1,
        },
      ];
    });
    setInputValue(''); // 新增完一項要重製輸入欄位
  };
  const handleToggleDone = (id) => {
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
  };
  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) return { ...todo, isEdit: isEdit };
        return { ...todo, isEdit: false };
      });
    });
  };
  const handleSave = ({ id, title }) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) return { ...todo, title: title, isEdit: false };
        return todo;
      });
    });
  };
  const handleDelete = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  
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
