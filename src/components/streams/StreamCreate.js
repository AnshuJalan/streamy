import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamCreate = (props) => {
  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label className="font-weight-bold mb-0">{label}</label>
        <input
          className={`form-control ${
            meta.error && meta.touched && "is-invalid"
          }`}
          value={input.value}
          onChange={input.onChange}
          autoComplete="off"
        />
        <div className="invalid-feedback">{meta.touched && meta.error}</div>
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="w-75 m-auto">
      <form onSubmit={props.handleSubmit(onSubmit)} className="form-group">
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) errors.title = "Please enter a title!";

  if (!formValues.description)
    errors.description = "Please enter a description!";

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
