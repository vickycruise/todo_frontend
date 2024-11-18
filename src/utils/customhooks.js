import { useFetchTodosQuery } from "./todoApi"; // Adjust the path based on your file structure

export const useTodos = (uid) => {
  const { data: todos, error, isLoading } = useFetchTodosQuery({ uid });
  return { todos, error, isLoading };
};
