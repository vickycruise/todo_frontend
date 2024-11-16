import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';

const EnhancedTable = ({ tasks: initialTasks = [] }) => {
  const [tasks, setTasks] = useState(
     
  );
  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showdesc, setShowdesc] = useState(false);
console.log(initialTasks)
useEffect(()=>{
    setTasks(initialTasks)
},[initialTasks])
  // Handle deleting a task
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Handle toggling the completion of a task
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  // Open the edit modal
  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleshowTask = (task) => {
    setShowdesc(true);
    setEditingTask(task);
  };

  // Save the edited task
  const handleSaveEdit = () => {
    if (editingTask.task.trim()) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? editingTask : task
      );
      setTasks(updatedTasks);
      setShowModal(false);
      setEditingTask(null);
    }
  };

  // Handle input change for editing task
  const handleChangeTaskInput = (e) => {
    setEditingTask({ ...editingTask, task: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2>To-Do App</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks&&tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                {task.task}
              </td>
              <td>
                <Button
                  variant={task.isCompleted ? 'success' : 'warning'}
                  onClick={() => handleToggleComplete(task.id)}
                >
                  {task.isCompleted ? 'Completed' : 'Mark as Done'}
                </Button>
              </td>
              <td>
                <Button variant="primary" onClick={() => handleshowTask(task)} className="mr-2">
                  View
                </Button>
                <Button variant="primary" onClick={() => handleEditTask(task)} className="ms-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteTask(task.id)} className="ms-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Task Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editingTask ? editingTask.task : ''}
            onChange={handleChangeTaskInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Task Modal */}
      <Modal show={showdesc} onHide={() => setShowdesc(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>{editingTask ? editingTask.task : 'No task selected'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowdesc(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EnhancedTable;
