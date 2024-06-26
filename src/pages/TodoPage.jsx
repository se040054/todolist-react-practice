import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todos';
import { useAuth } from 'components/contexts/AuthContext';
import Swal from 'sweetalert2';
const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();
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
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((todos) => {
        return todos.filter((todo) => {
          return todo.id !== id;
        });
      });
    } catch (error) {
      console.log(error);
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
  useEffect(() => {
    if (isAuthenticated === false) {
      Swal.fire({
        title: '未登入!',
        text: '頁面將在2秒後自動跳轉!',
        icon: 'success',
        confirmButtonText: '繼續',
        timer: 2000,
        position: 'top',
        willClose: () => {
          navigate('/login');
        },
      });
    }
  }, [navigate, isAuthenticated]); // 這裡要放nave不然git action會出錯
  return (
    <div>
      TodoPage
      <Header username={currentMember?.name} />
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
