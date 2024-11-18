import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL || "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: ({ id, uid }) => {
        if (id) return `/todo?id=${id}`;
        if (uid) return `/todo?uid=${uid}`;
        return "/todo";
      },
    }),

    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/todo",
        method: "POST",
        body: newTodo,
      }),
    }),

    updateTodo: builder.mutation({
      query: ({ id, updatedTodo }) => ({
        url: `/todo/${id}`,
        method: "PUT",
        body: updatedTodo,
      }),
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
