import apiClient from '../apiClient';

export const getTodos = async () => {
  return await apiClient.get<Todo[]>('/todos');
};

export const delTodo = async (id: number) => {
  return await apiClient.delete<boolean>(`/todos/${id}`);
};

export const addTodo = async ({name}: {name: string}) => {
  return await apiClient.post<Todo>(`/todos`, {name, isComplete: false});
};

export const updateTodo = async (todo: Todo) => {
  return await apiClient.put<Todo>(`/todos`, todo);
};
