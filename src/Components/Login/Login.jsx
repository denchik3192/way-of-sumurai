import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { Input } from "../Common/FormsControls/FormsControl";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./../Common/FormsControls/FormsControl.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          type={"email"}
          placeholder={"Email"}
          validate={[required]}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <input placeholder={"Password"}  type={"password"} validate={[required]} name={"password"} component={Input}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
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
