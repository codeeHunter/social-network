import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Component/FormsControls";
import { validation } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducers";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.css";

const LoginForm = (props) => (
    <div className={s.loginBlock}>
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field placeholder="Email" name="email" component={Input} validate={[validation]} />
            </div>
            <div className={s.password}>
                <Field
                    placeholder="Password"
                    name="password"
                    type="password"
                    component={Input}
                    validate={[validation]}
                />
            </div>
            <div className="">{props.captcha && <img src={props.captcha} alt="" />}</div>
            <div className="">
                {props.captcha && (
                    <Field
                        placeholder={"Symbols from image"}
                        name={"captcha"}
                        component={Input}
                        validate={[validation]}
                    />
                )}
            </div>
            {props.error && <div className={s.someError}>{props.error}</div>}
            <div className={s.loginButton}>
                <button className={"btn"}>Login</button>
            </div>
        </form>
    </div>
);

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    const navigate = useNavigate();

    if (props.isAuth) {
        return navigate("/profile");
    }

    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
            <div className="">
                <h2>Test account</h2>
                <p>Email: testovyjt536@gmail.com</p>
                <p>Password: tiD2XT</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    captcha: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
