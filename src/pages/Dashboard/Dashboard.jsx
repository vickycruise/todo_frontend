import React, { useEffect, useState } from "react";
import EnhancedTable from "../../components/Table/EnhancedTable";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useFetchTodosQuery,
  useUpdateTodoMutation,
} from "../../services/api/todoApi";
import { toast } from "react-toastify";
import TaskComponent from "../../components/Table/TaskComponent";

const Dashboard = () => {
  const [task, setTask] = useState([]);

  const { data: todos } = useFetchTodosQuery({ uid: "1" });
  const [addTodo, { isLoading: todoloading, error: todoerror }] =
    useAddTodoMutation();
  const [updateTodo, { isLoading, error }] = useUpdateTodoMutation();

  const [deleteTodo] = useDeleteTodoMutation();

  const handleAddTask = async (data) => {
    if (data) {
      const newTaskObject = {
        uid: 1,
        title: data.title,
        description: data.description,
        time: data.time,
        isCompleted: false,
      };
      try {
        const result = await addTodo(newTaskObject).unwrap();
        toast("Todo added Successfully");
        setTask((prevTasks) => [...prevTasks, result]);
      } catch (error) {
        toast.error("Failed to add task.");
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id).unwrap();

      setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

      toast.success("Todo deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task.");
    }
  };
  useEffect(() => {
    if (todos) {
      setTask(todos);
    }
  }, [todos]);
  const handleEdit = async (task) => {
    console.log(task, "edittask");
    try {
      const updatedTask = await updateTodo(task).unwrap();
      console.log("Task updated successfully:", updatedTask);
      setTask(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  return (
    <div className="container mt-4">
      <TaskComponent handleSubmits={handleAddTask} />
      <EnhancedTable
        tasks={task}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Dashboard;
