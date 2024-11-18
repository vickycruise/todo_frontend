import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  time: Yup.date().required("Time is required").nullable(),
});

const TaskComponent = ({ handleSubmits }) => {
  const initialValues = {
    title: "",
    description: "",
    time: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    handleSubmits(values);
    resetForm();
  };

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <BootstrapForm.Group controlId="title">
              <BootstrapForm.Label>Title</BootstrapForm.Label>
              <Field
                name="title"
                type="text"
                className="form-control"
                placeholder="Enter title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="description">
              <BootstrapForm.Label>Description</BootstrapForm.Label>
              <Field
                name="description"
                as="textarea"
                className="form-control"
                placeholder="Enter description"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="time">
              <BootstrapForm.Label>Time</BootstrapForm.Label>
              <Field
                name="time"
                type="datetime-local"
                className="form-control"
                onChange={(e) => setFieldValue("time", e.target.value)}
              />
              <ErrorMessage
                name="time"
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>
            <br />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskComponent;
