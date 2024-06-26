import React from "react";
import s from "./FormsControl.module.css";

export const FormControl = ({
  input,
  meta: { touched, error },
  children,
  element,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />{" "}
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />{" "}
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  // component,
  props = {},
  text = ""
) => (
  <div>
    <input
      placeholder={placeholder}
      name={name}
      validate={validators}
      // component={component}
      {...props}
    />
    {text}
  </div>
);
