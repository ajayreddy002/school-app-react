import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import {
    Button
} from '@material-ui/core';
import {
    TextField,
} from 'formik-material-ui';
import { IBranchModel } from '../../_routes/_models/branchModel';
import CircularProgress from '@material-ui/core/CircularProgress';
import BranchServices from '../../_services/branchServices';
import { toast } from 'react-toastify';
const defaultValues = {
    email: '',
    password: '',
    branch_name: '',
    user_name: '',
    branch_address: '',
    roll: 2,
    school_id: ''
}
export default class AddBranch extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    branch_name: '',
                    user_name: '',
                    branch_address: '',
                    roll: 2,
                    school_id: ''
                }}
                validate={values => {
                    const errors: Partial<IBranchModel> = {};
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
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    if (!values.user_name) {
                        errors.user_name = 'Required';
                    }
                    if (!values.branch_address) {
                        errors.branch_address = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    const schoolDetails: any = localStorage.getItem('currentUser');
                    const schoolId = JSON.parse(schoolDetails);
                    values.school_id = schoolId.school_id;
                        setSubmitting(false);
                        BranchServices.postBranchData('addbranch', values)
                            .then((data: any) => {
                                toast.success(`${data.branch_name} Created successfully`, {
                                    position: 'bottom-center',
                                    draggable: false,
                                    hideProgressBar: true,
                                    autoClose: 5000
                                });
                                resetForm(defaultValues);
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
                        <h3>Add branch</h3>
                        <div className="add_branch_form">
                            <Form>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <Field className="input_block"
                                            type="text"
                                            label="Name"
                                            name="user_name"
                                            component={TextField}
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <Field className="input_block"
                                            type="text"
                                            label="Branch Name"
                                            name="branch_name"
                                            component={TextField}
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
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <Field
                                            type="text" className="input_block"
                                            label="Branch address"
                                            name="branch_address"
                                            component={TextField}
                                        />
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