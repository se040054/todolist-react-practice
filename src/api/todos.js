import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (error) {
    console.log('[Get Todos failed]', error);
  }
};

const createTodo = async (payload) => {
  try {
    const { title, isDone } = payload;

    const res = await axios.post(`${baseUrl}/todos/`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.log('[Post Todos failed]', error);
  }
};
const patchTodo = async (payload) => {
  const { title, id, isDone } = payload;
  try {
    const res = await axios.patch(`${baseUrl}/todos/${id}`, {
      title,
      id,
      isDone,
    });
    return res.data
  } catch (error) {
     console.log('[Patch Todos failed]', error);
  }
};
const deleteTodo =async (id) => {
  try {
   const res =  await axios.delete(`${baseUrl}/todos/${id}`);
   return res.data
  } catch (error) {
     console.log('[Delete Todos failed]', error);
  }

};

export { getTodos, createTodo , patchTodo ,deleteTodo };
