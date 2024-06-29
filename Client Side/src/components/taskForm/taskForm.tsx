import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { StatusEnum } from '../../models/enumType';
import { Project } from '../../models/types'
import * as yup from 'yup'


interface TaskFormProps {
  project: Project;
  updateProject: (project: Project) => void;
  setEditingProject: (project: Project | null) => void;
  onCancel: () => void;


}

const TaskForm: React.FC<TaskFormProps> = ({ project, updateProject, setEditingProject, onCancel }) => {

  const formik = useFormik({
    initialValues: {
      ...project,
      status: Object.keys(StatusEnum).find(key => StatusEnum[key as keyof typeof StatusEnum] === project.status) as keyof typeof StatusEnum,
    },
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      description: yup.string().required('Required'),
      status: yup.mixed<keyof typeof StatusEnum>()
        .oneOf(Object.keys(StatusEnum).filter(key => isNaN(Number(key))) as (keyof typeof StatusEnum)[])
        .required('Required'),
      someDate: yup.date().required('Required'),
    }),
    onSubmit: values => {
      const updatedProject: Project = {
        ...values,
        status: StatusEnum[values.status as keyof typeof StatusEnum],
      };
      console.log('Updated Project Form Values:', updatedProject);
      updateProject(updatedProject);
      setEditingProject(null);
    },
    onReset: () => {
      onCancel();
    },
  });


  const handleDateChange = (date: Date | null) => {
    formik.setFieldValue('someDate', date);
  };



  return     <form onSubmit={formik.handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
    {formik.touched.name && formik.errors.name ? <div className="invalid-feedback">{formik.errors.name}</div> : null}
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input
      id="description"
      name="description"
      type="text"
      className={`form-control ${formik.touched.description && formik.errors.description ? 'is-invalid' : ''}`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.description}
    />
    {formik.touched.description && formik.errors.description ? (
      <div className="invalid-feedback">{formik.errors.description}</div>
    ) : null}
  </div>
  <div className="form-group">
    <label htmlFor="status">Status</label>
    <select
          id="status"
          name="status"
          className={`form-control ${formik.touched.status && formik.errors.status ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.status}
        >
          {Object.keys(StatusEnum)
            .filter((key) => isNaN(Number(key)))
            .map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
        </select>
    {formik.touched.status && formik.errors.status ? (
      <div className="invalid-feedback">{formik.errors.status}</div>
    ) : null}
  </div>
  <div className="form-group">
    <label htmlFor="someDate">Date</label>
    <input
      id="someDate"
      name="someDate"
      type="date"
      className={`form-control ${formik.touched.someDate && formik.errors.someDate ? 'is-invalid' : ''}`}
      onChange={e => handleDateChange(new Date(e.target.value))}
      onBlur={formik.handleBlur}
      value={formik.values.someDate ? new Date(formik.values.someDate).toISOString().substr(0, 10) : ''}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Save
  </button>
  <button type="button" className="btn btn-secondary" onClick={onCancel}>
    Cancel
  </button>
</form>
};

export default TaskForm;
