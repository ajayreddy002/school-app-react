import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import {
    Button
} from '@material-ui/core';
import {
    TextField,
} from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { ITeacherModel } from '../../_routes/_models/teacherModel';
import TeacherServices from '../../_services/teachServices';

export default class AddTeacher extends Component {
    initialValues: ITeacherModel = {
        teacher_name: '',
        branch_name: '',
        branch_id: '',
        roll: 3,
        school_id: '',
        password: '',
        email: ''
    }
    render() {
        const branchDetails: any = localStorage.getItem('currentUser');
        const schoolId = JSON.parse(branchDetails);
        this.initialValues.branch_name = schoolId.branch_name;
        return (
            <Formik
                initialValues={this.initialValues}
                validate={values => {
                    const errors: Partial<ITeacherModel> = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    if (!values.branch_name) {
                        errors.branch_name = 'Required';
                    }
                    if (!values.teacher_name) {
                        errors.teacher_name = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    const branchDetails: any = localStorage.getItem('currentUser');
                    const schoolId = JSON.parse(branchDetails);
                    values.school_id = schoolId.school_id;
                    values.branch_id = schoolId.branch_id;
                    values.branch_name = schoolId.branch_name;
                    setSubmitting(false);
                    TeacherServices.addTeacher('teacher', values)
                        .then((data: any) => {
                            toast.success(`${data.teacher_name} Added successfully`, {
                                position: 'bottom-center',
                                draggable: false,
                                hideProgressBar: true,
                                autoClose: 5000
                            });
                            resetForm(this.initialValues);
                        }).catch(err => {
                            if (err.message.includes(403)) {
                                toast.error('Branch already exists', {
                                    position: 'bottom-center',
                                    draggable: false,
                                    hideProgressBar: true,
                                    autoClose: 5000
                                });
                            }
                            if (err.message.includes(500)) {
                                toast.error('Something went wrong', {
                                    position: 'bottom-center',
                                    draggable: false,
                                    hideProgressBar: true,
                                    autoClose: 5000
                                })
                            }
                        })
                }}
                render={({ submitForm, isSubmitting }) => (
                    <div className="add_branch_block">
                        <div className="icon_block">
                            <div className="icon_set">
                                <AddRoundedIcon />
                            </div>
                            <h4>Add teacher</h4>
                        </div>
                        <div className="add_branch_form">
                            <Form>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <Field className="input_block"
                                            type="text"
                                            label="Teacher Name"
                                            name="teacher_name"
                                            component={TextField}
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <Field className="input_block"
                                            type="text"
                                            label="Branch Name"
                                            name="branch_name"
                                            component={TextField}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="input_block">
                                            <Field className="input_block"
                                                type="email"
                                                label="Email"
                                                name="email"
                                                component={TextField}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="input_block">
                                            <Field className="input_block"
                                                type="password"
                                                label="Password"
                                                name="password"
                                                component={TextField}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {isSubmitting && <CircularProgress />}
                                <br />
                                <div className="action_block">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Add
                                    </Button>
                                </div>

                            </Form>
                        </div>
                    </div>
                )}
            />
        )
    }
}