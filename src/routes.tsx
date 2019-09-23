import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import AddTeacher from './components/hr&payroll/addTeacherComponent';
import DashBoard from './components/dashboard/dashBoard';
// import Login from './login/login';
export default class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path='/' component={DashBoard} />
                <Route path='/dashboard' component={DashBoard} />
                <Route path='/addteacher' component={AddTeacher} />
              </Switch>
        )
    }
}