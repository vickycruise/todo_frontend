import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTaskModal = ({
  showModal,
  setShowModal,
  editingTask,
  handleSaveEdit,
}) => {
  const [task, setTask] = useState(editingTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task, "submit");
    handleSaveEdit(task);
    setShowModal(false);
  };
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTaskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={task ? task.title : ""}
              onChange={handleChange}
              placeholder="Enter task title"
            />
          </Form.Group>

          <Form.Group controlId="formTaskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={handleChange}
              value={task ? task.description : ""}
              placeholder="Enter task description"
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
