import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { createField, Input } from "../Common/FormsControls/FormsControl";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./../Common/FormsControls/FormsControl.module.css";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      { createField("Email", "email", [required], Input) }
      { createField("Password", "password", [required], Input, {type:"password"}) }
      { createField(null, "rememberMe", [required], Input, {type:"checkbox"},"rememberMe") }

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
