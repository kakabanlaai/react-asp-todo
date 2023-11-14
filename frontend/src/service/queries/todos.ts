import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  addTodo,
  delTodo,
  getTodos,
  updateTodo,
} from '../repositories/todos/todosRepository';
import toast from 'react-hot-toast';

export const useGetAllTodo = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos().then((res) => res.data),
  });
};

export const useDelTodo = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => delTodo(id).then((res) => res.data),
    onSuccess: () => {
      queryClient.setQueryData<Todo[]>(['todos'], (old) =>
        old?.filter((item) => item.id !== id)
      );
      toast.success('Xóa thành công');
    },
    onError: () => {
      toast.error('Xóa thất bại');
    },
  });
};

export const useAddTodo = (name: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => addTodo({name}).then((res) => res.data),
    onSuccess: (data) => {
      queryClient.setQueryData<Todo[]>(['todos'], (old) =>
        old ? [...old, data] : [data]
      );
      toast.success('Thêm thành công');
    },
    onError: () => {
      toast.error('Thêm thất bại');
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo: Todo) => updateTodo(todo).then((res) => res.data),
    onSuccess: (data) => {
      queryClient.setQueryData<Todo[]>(['todos'], (old) =>
        old?.map((item) => {
          if (item.id === data.id) {
            return {...item, isComplete: data.isComplete};
          } else return item;
        })
      );
      // toast.success('Thêm thành công');
    },
    onError: () => {
      toast.error('Thêm thất bại');
    },
  });
};
