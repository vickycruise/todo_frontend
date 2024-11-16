import React, { useState, useTransition } from 'react';
import EnhancedTable from '../../components/Table/EnhancedTable';
import { Button, Form } from 'react-bootstrap';

const Dashboard = () => {
  const initialTasks = [
    { id: 1, task: 'Complete React project', isCompleted: false },
    { id: 2, task: 'Read a book', isCompleted: false },
  ];
  
  const [task, setTask] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: Date.now(),
        task: newTask,
        isCompleted: false,
      };

      // Deferring the state update using startTransition
      startTransition(() => {
        setTask((prevTasks) => [...prevTasks, newTaskObject]);
      });

      setNewTask(''); // Reset input value after adding task
    }
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="primary" className="mt-2" onClick={handleAddTask} disabled={isPending}>
          {isPending ? 'Adding...' : 'Add Task'}
        </Button>
      </div>
      <EnhancedTable tasks={task} />
    </div>
  );
};

export default Dashboard;
