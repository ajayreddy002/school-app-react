import React, { Component } from 'react';
import '../login/loginComponent.scss'
import logo from '../../assets/images/white_logo.png';
// import SignUp from './signupComponent';
import { LoginService } from '../../_services/login_service';
// import { RouteComponentProps } from 'react-router';
// import { SignUpModel } from './model';
import { Formik, FormikActions, Form, Field, ErrorMessage } from 'formik';
import { SignUpModel } from './model';
import { toast } from 'react-toastify';
// import { Redirect } from 'react-router';
import { authenticationService } from '../../_services/authService';
export interface LoginModel {
    email: string;
    password: string;
    // signUpData: SignUpModel;
}
interface ShowBlock {
    isSignIn: boolean;
}
// export interface SignUpModel {
//     name: string;
//     school_name: string;
//     email: string;
//     password: string;
//     school_address: string;
// }

export class Login extends Component {
    public state: ShowBlock;
    constructor(props: ShowBlock) {
        super(props);
        this.state = {
            isSignIn: true
        }
        this.showSignIn = this.showSignIn.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
        this.postNewUser = this.postNewUser.bind(this);
    }
    showSignIn() {
        this.setState({
            isSignIn: true
        });
    }
    showSignUp() {
        this.setState({
            isSignIn: false
        });
    }
    submitLoginData = (loginData: LoginModel) => {
        LoginService.postLoginData('login', loginData)
            .then(data => {
                if (data.status === 200) {
                    authenticationService.login(data.data);
                } else {
                    toast.info('User not exists', {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                }
            }).catch(err => {
                console.log(err)
                if (err.message.includes(403)) {
                    toast.error('Invalid email or password', {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                }
                if (err.message.includes(500, 503)) {
                    toast.error('Something went wrong', {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                }
            })
    }
    postNewUser = (newUserData: SignUpModel) => {
        LoginService.postSignUpData('school', newUserData)
            .then(data => {
                toast.success(`${newUserData.school_name} Registered successfully`, {
                    position: 'bottom-center',
                    draggable: false,
                    hideProgressBar: true,
                    autoClose: 5000
                });
                this.setState({
                    isSignIn: !this.state.isSignIn
                })
            }).catch(e => {
                if (e.message.includes(403)) {
                    toast.info('Required parameters are missing', {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                }
                if (e.message.includes(500)) {
                    toast.error('Something went wrong', {
                        position: 'bottom-center',
                        draggable: false,
                        hideProgressBar: true,
                        autoClose: 5000
                    })
                }
                console.log(e.message.includes(403), 'require');
                console.log(e, 'err');
            })
    }
    render() {
        return (
            <div className="main_block1">
                <div className="login_wraper">
                    <div className="login__container">
                        <div className="login__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="login__signin">
                            {this.state.isSignIn &&
                                <div className="hide_block">
                                    <h3 className="login__title">Sign In To Admin</h3>
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: ''
                                        }}
                                        onSubmit={(values: LoginModel, actions: FormikActions<LoginModel>, ) => {
                                            if (values.email !== '' && values.password !== '') {
                                                this.submitLoginData(values);
                                            } else {
                                                toast.warn('Please enter valid details', {
                                                    position: 'bottom-center',
                                                    draggable: false,
                                                    hideProgressBar: true,
                                                    autoClose: 5000
                                                })
                                            }
                                            actions.setSubmitting(false);
                                        }}
                                        render={({ errors, touched, status }) => (
                                            <Form>
                                                <div className="input-group">
                                                    <Field type="text" name="email" placeholder="Enter email" className={errors.email
                                                        && touched.email ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="input-group">
                                                    <Field type="password" name="password" placeholder="Enter password" className={errors.password
                                                        && touched.password ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="login__extra">
                                                    <div className="col align-right">
                                                        <p >Forgot Password ?</p>
                                                    </div>
                                                </div>
                                                <div className="login__actions">
                                                    <button type="submit">Sign In</button>
                                                </div>
                                                {status &&
                                                    <div className={'alert alert-danger'}>{status}</div>
                                                }
                                            </Form>
                                        )}
                                    />
                                    {/* <form>
                                        <div className="input-group">
                                            <input type="email" name="email" placeholder="Enter email" />
                                        </div>
                                        <div className="input-group">
                                            <input type="password" name="password" className="pass" placeholder="Enter password" />
                                        </div>
                                        <div className="login__extra">
                                            <div className="col align-right">
                                                <p >Forgot Password ?</p>
                                            </div>
                                        </div>
                                        <div className="login__actions">
                                            <button type="submit">Sign In</button>
                                        </div>
                                    </form> */}

                                    <div className="sign_up_switch">
                                        <div className="login__account-msg">
                                            <span> Don't have an account yet ? </span>&nbsp;&nbsp;
                                    <p onClick={this.showSignUp}>Sign Up</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* Sign Up */}
                            {!this.state.isSignIn &&
                                <div className="hide_block">
                                    <h3 className="login__title">Sign Up</h3>
                                    <Formik
                                        initialValues={{
                                            user_name: '',
                                            school_name: '',
                                            email: '',
                                            password: '',
                                            school_address: '',
                                            roll: 1
                                        }}
                                        onSubmit={(values: SignUpModel, actions: FormikActions<SignUpModel>, ) => {
                                            console.log({ values, actions });
                                            if (values.email !== '' && values.password !== '' &&
                                                values.school_name !== ''
                                            ) {
                                                this.postNewUser(values)
                                            }
                                            actions.setSubmitting(false)
                                        }}
                                        render={({ errors, touched, status }) => (
                                            <Form>
                                                <div className="input-group">
                                                    <Field type="text" name="user_name" placeholder="Enter name" className={errors.user_name
                                                        && touched.user_name ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="user_name" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="input-group">
                                                    <Field type="text" name="school_name" placeholder="Enter school name" className={errors.school_name
                                                        && touched.school_name ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="school_name" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="input-group">
                                                    <Field type="text" name="email" placeholder="Enter email" className={errors.email
                                                        && touched.email ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="input-group">
                                                    <Field type="password" name="password" placeholder="Enter password" className={errors.password
                                                        && touched.password ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="input-group">
                                                    <Field type="text" name="school_address" placeholder="Enter school address" className={errors.school_address
                                                        && touched.school_address ? 'is-invalid' : ''} />
                                                    <ErrorMessage name="school_address" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="login__actions">
                                                    <button type="submit">Sign Up</button>
                                                </div>
                                                {status &&
                                                    <div className={'alert alert-danger'}>{status}</div>
                                                }
                                            </Form>
                                        )}
                                    />
                                    <div className="sign_up_switch">
                                        <div className="login__account-msg">
                                            <span> Already have an account </span>&nbsp;&nbsp;
                                            <p onClick={this.showSignIn}>Sign In</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}