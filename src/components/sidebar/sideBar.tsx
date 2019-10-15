import React, { Component } from 'react';
// import { pushRotate as Menu } from "react-burger-menu";
import { Switch, NavLink, Route } from 'react-router-dom';
import DashBoard from '../dashboard/dashBoard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import './sideBar.scss';
import { authenticationService } from '../../_services/authService';
import UserMenu from './userMenu';
import BranchDetails from '../branch/branchDetails';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import AddBranch from '../branch/addBranch';
import AddTeacher from '../teacher/addTeacher';
import MenuBookIcon from '@material-ui/icons/MenuBook';
// import { PrivateRoute } from '../../_routes/PrivateRoute';
import Divider from '@material-ui/core/Divider';
import SyllabusPlaningComponent from '../teacher/syllabus/syllabusPlaning';
import ExamsComponent from '../teacher/exams/examsComponent';
import AssignMentComponent from '../teacher/exams/assignmentComponent';
import AttendanceComponent from '../teacher/attendance and marks/attendanceComponent';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import attendanceIcon from '../../assets/images/icons/icon.svg';
import StudentDashBoard from '../students/studentsDashBoard';
import ProfileComponent from '../profile/profileComponent';
import CalendarComponent from '../calendar/calendarComponent';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
// import LogoImage from '../../assets/images/logo_main2.png';
export class SideNav extends Component {
    public state: any;
    constructor(props: any) {
        super(props)
        this.state = {
            currentUser: authenticationService.currentUserValue,
        }
    }
    render() {
        const { currentUser } = this.state;
        const userData = JSON.parse(currentUser);
        return (
            <div>
                <div className="side_nav_block">
                    <div className="side_nav">
                        <aside>
                            <div className="logo_block">
                                <h3 className="logo"><span>E</span> Shiksha</h3>
                                {/* <img className="img_fluid" src={LogoImage} alt=""/> */}
                                <button className="svg_block">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) "></path>
                                            <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) "></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <Divider />
                            <div className="side_nav_content">
                                <ul>
                                    <li><NavLink to="/" exact className="route_link"> <span className="route_link_icon"><DashboardIcon /></span> Dashboard</NavLink></li>
                                    {userData.roll === 1 &&
                                        <li><NavLink to="/branches" exact className="route_link"> <span className="route_link_icon"><AccountTreeRoundedIcon /></span> Branches</NavLink></li>
                                    }
                                    {(userData.roll === 1 || userData.roll === 2) &&
                                        < li > <NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Teacher</NavLink></li>
                                    }
                                    {userData.roll === 3 &&
                                        <React.Fragment>
                                            <li><NavLink to="/syllabus" exact className="route_link" ><span className="route_link_icon"><MenuBookIcon /></span>Syllabus Planing</NavLink></li>
                                            <li><NavLink to="/attendance" exact className="route_link" ><span className="route_link_icon"><img src={attendanceIcon} alt="Attendance" /></span>Attendance</NavLink></li>
                                            <li><NavLink to="/assignment" exact className="route_link" ><span className="route_link_icon"><AssignmentIndIcon /></span>AssignMent</NavLink></li>
                                            <li><NavLink to="/student" exact className="route_link" ><span className="route_link_icon"><AssignmentIndIcon /></span>student dashboard</NavLink></li>
                                            <li><NavLink to="/timetable" exact className="route_link" ><span className="route_link_icon"><EventNoteRoundedIcon /></span>Timetable</NavLink></li>
                                        </React.Fragment>
                                    }
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><LocalLibraryRoundedIcon /></span>Student</NavLink></li>
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Parent</NavLink></li>
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Settings</NavLink></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div className="main_content">
                        <div className="top_nav">
                            {currentUser &&
                                <div>
                                    {/* <p>Hi, {userData.user_name}</p> */}
                                    <UserMenu {...this.state} />
                                </div>
                            }
                            {!currentUser &&
                                <p>Hi, User</p>
                            }
                        </div>
                        <div className="route_content">
                            <Switch>
                                <Route exact path='/' component={DashBoard} />
                                <Route path='/dashboard' component={DashBoard} />
                                {(userData.roll === 1 || userData.roll === 2) &&
                                    <Route path='/addteacher' component={AddTeacher} />
                                }
                                {userData.roll === 3 &&
                                    <Route path='/syllabus' component={SyllabusPlaningComponent} />
                                }
                                <Route path='/branches' component={BranchDetails} />
                                <Route path='/addbranch' component={AddBranch} />
                                <Route path='/profile' component={ProfileComponent}></Route>
                                {/* Teacher Routes */}
                                {userData.roll === 3 &&
                                    <React.Fragment>
                                        <Route path='/exams' component={ExamsComponent}></Route>
                                        <Route path='/assignment' component={AssignMentComponent}></Route>
                                        <Route path='/attendance' component={AttendanceComponent}></Route>
                                        <Route path='/student' component={StudentDashBoard}></Route>
                                        <Route path='/timetable' component={CalendarComponent}></Route>
                                    </React.Fragment>
                                }
                            </Switch>
                            {/* <Routes/> */}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default SideNav;