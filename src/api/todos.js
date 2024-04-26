import axios from 'axios';

const baseUrl = 'https://todo-list.alphacamp.io/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use( // 設置攔截器，所有axios實例發出請求前設置header config
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => console.log(error),
);

const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/todos`);
    console.log(res)
    return res.data.data;
  } catch (error) {
    console.log('[Get Todos failed]', error);
  }
};

const createTodo = async (payload) => {
  try {
    const { title, isDone } = payload;

    const res = await axiosInstance.post(`${baseUrl}/todos/`, {
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
    const res = await axiosInstance.patch(`${baseUrl}/todos/${id}`, {
      title,
      id,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.log('[Patch Todos failed]', error);
  }
};
const deleteTodo = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.log('[Delete Todos failed]', error);
  }
};

export { getTodos, createTodo, patchTodo, deleteTodo };
