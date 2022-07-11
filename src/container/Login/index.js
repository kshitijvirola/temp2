import React, { Component } from "react";
import * as Yup from "yup";
import { Spin } from "antd";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";

import { StyleContainer } from "./style";
import { LoginConstant } from "./constant";
import { login } from "redux/login/actions";
import { FormValidation } from "App/AppConstant";
import {
  Label,
  Input,
  Button,
  Header,
  FormGroup,
  FormItem,
} from "components/Form";

const loginValidationSchema = Yup.object().shape({
  user: Yup.string().trim().required(FormValidation.emailRequired),
  password: Yup.string().trim().required(" "),
  // .max(45, FormValidation.inputMax)
  // .email(FormValidation.emailInvalid)
  // .min(6, FormValidation.passwordMin)
  // .max(25, FormValidation.passwordMax)
  // .required(FormValidation.passwordRequired),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isblock: false };
  }
  // async componentDidUpdate(prevProps) { loading: false,
  //   const { loading } = this.props;if (prevProps.loading !== loading) {this.setState({ loading });
  //     setInterval(() => {this.state.loading && this.setState({ loading: false });}, 4000);}}
  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ isblock: true });
      setTimeout(() => {
        this.setState({ isblock: false });
      }, 4500);
      let data = { user: values.user.trim(), password: values.password }; // userId: 1, //response.userId,// userName: values.user,
      await this.props.login(data);
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };
  render() {
    const { loading} = this.props;
    const { isblock } = this.state;
    return (
      <Spin spinning={loading} size="large">
        <StyleContainer>
          <Header />
          <div className="form-div anime">
            <Label className="head anime" title={LoginConstant.login} />
            <div className="loginDiv anime">
              <Formik
                initialValues={{user: "",password: ""}}
                validationSchema={loginValidationSchema}
                onSubmit={this.handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  onBlur,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <Form onSubmit={handleSubmit} noValidate>
                    <FormItem>
                      <FormGroup>
                        <Input
                          autoFocus
                          placeholder={LoginConstant.placeholder}
                          onBlur={handleBlur}
                          name="user"
                          value={values.user}
                          handleChange={handleChange}
                          className={
                            errors.user && touched.user ? "empty" : ""
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          password
                          max={25}
                          onBlur={handleBlur}
                          placeholder={LoginConstant.passwordplaceholder}
                          type="password"
                          name="password"
                          value={values.password.trim()}
                          handleChange={handleChange}
                          className={
                            errors.password && touched.password ? "empty" : ""
                          }
                        />
                        <NavLink to="/forget-pasword" className="forgetlbl">
                          {LoginConstant.forgerPwd}
                        </NavLink>
                      </FormGroup>
                      <div className="btnDiv">
                        <Button type="submit" disabled={isblock}>
                          {LoginConstant.login}
                        </Button>
                      </div>
                    </FormItem>
                  </Form>
                )}
              </Formik>
              {/* <div className="btmDiv">
                <NavLink to="/register-profile" className="lbl">
                  {LoginConstant.donthave}
                  <b>{LoginConstant.register}</b>
                </NavLink>
              </div> */}
            </div>
          </div>
        </StyleContainer>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  loading: state.login.loading,
  error: state.login.error,
  message: state.login.message,
});
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
