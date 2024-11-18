import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import EditTaskModal from "./EditTaskModel";

const EnhancedTable = ({
  tasks: initialTasks = [],
  handleDelete,
  handleEdit,
}) => {
  const [tasks, setTasks] = useState();
  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showdesc, setShowdesc] = useState(false);
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const handleDeleteTask = (id) => {
    handleDelete(id);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleshowTask = (task) => {
    setShowdesc(true);
    setEditingTask(task);
  };

  const handleSaveEdit = (data) => {
    console.log(data, "data");
    if (editingTask) {
      handleEdit(editingTask);
      setShowModal(false);
      setEditingTask(null);
    }
  };

  // const handleChangeTaskInput = (e) => {
  //   const task = { description: e.target.value };
  //   setEditingTask((prv) => ({ ...prv, ...task }));
  //   console.log(task);
  // };

  return (
    <div className="container mt-5">
      <h2>To-Do App</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, i) => (
              <tr key={task.id}>
                <td>{i}</td>
                <td
                  style={{
                    textDecoration: task.isCompleted ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </td>
                <td>{task.description}</td>
                <td>
                  <Button
                    variant={task.isCompleted ? "success" : "warning"}
                    onClick={() => handleToggleComplete(task.id)}
                  >
                    {task.isCompleted ? "Completed" : "Mark as Done"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleshowTask(task)}
                    className="mr-2"
                  >
                    View
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleEditTask(task)}
                    className="ms-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteTask(task.id)}
                    className="ms-2"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {showModal && (
        <EditTaskModal
          showModal={showModal}
          setShowModal={setShowModal}
          editingTask={editingTask}
          handleSaveEdit={handleSaveEdit}
        />
      )}

      {/* View Task Modal */}
      <Modal show={showdesc} onHide={() => setShowdesc(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            {editingTask ? editingTask.title : "Task..."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingTask ? editingTask.description : "No task selected"}
        </Modal.Body>
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
