import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-toastify';
import customFetch from './utils';
export const useFetchTasks = () => {
  const { isLoading, data, error, isError } = useQuery({
    //identifier:
    queryKey: ['tasks'],
    //must return a promise:
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    },
  });
  return { isLoading, data, error, isError };
};
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading: isCreatingLoading } = useMutation({
    //must return a promise
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      //reloads all data from the data who's identifier is tasks
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task added');
      //   setNewItemName('');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isCreatingLoading };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ id, isDone }) => customFetch.patch(`/${id}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { editTask };
};
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask, deleteTaskLoading };
};
