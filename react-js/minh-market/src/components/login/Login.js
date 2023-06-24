import "./login.css"
import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginAcc} from "../../service/LoginService";
import {useNavigate} from "react-router";


export function Login() {
    const navigate=useNavigate()
    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                onSubmit={values => {
                    const login = async () => {
                        const result = await loginAcc(values);
                        localStorage.setItem("token", result.token)
                        localStorage.setItem("username", result.username)
                        localStorage.setItem("role", result.role)
                        navigate("/")
                    }
                    login()
                }}
            >
                <Form>
                    <div className="bodywrap">
                        <section className="bread-crumb"
                                 style={{background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"}}>
                            <div className="container">
                                <div className="title-bread-crumb"> Đăng nhập tài khoản</div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="container">
                                <div className="wrap_background_aside page_login">
                                    <div className="row">
                                        <div style={{margin: "auto"}}
                                             className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 ">
                                            <div style={{background: "#fff", borderRadius: "5px"}}
                                                 className="row no-margin align-items-center">
                                                <div className="page-login pagecustome clearfix no-padding">
                                                    <div className="wpx">
                                                        <ul className="auth-block__menu-list">
                                                            <li className="active">
                                                                <a href="#" title="Đăng nhập">Đăng nhập</a>
                                                            </li>
                                                            <li className="active">
                                                                <a href="#" title="Đăng nhập">Đăng kí</a>
                                                            </li>
                                                        </ul>
                                                        <h1 className="title_heads a-center">
                                                            <span>Đăng nhập</span>
                                                        </h1>
                                                        <div id="login" className="section">
                                                            <div className="form-signup clearfix"
                                                                 style={{marginTop: "18px"}}>
                                                                <div className="form-group">
                                                                    <Field type="text"
                                                                           className="form-control form-control-lg"
                                                                           name="username"
                                                                           placeholder="Tài khoản"
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Field type="password"
                                                                           className="form-control form-control-lg"
                                                                           name="password"
                                                                           placeholder="Mật khẩu"
                                                                    />
                                                                </div>
                                                                <div className="pull-xs-left">
                                                                    <input className="btn btn-style btn_50"
                                                                           type="submit"
                                                                           value="Đăng nhập"/>
                                                                    <span
                                                                        className="block a-center quenmk">Quên mật khẩu</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Form>

            </Formik>

        </>
    )
}