import React from 'react';
// import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
// import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import listIcon from '../../assets/images/icons/list.svg';
import dateIcon from '../../assets/images/icons/event1.svg';
import examIcon from '../../assets/images/icons/exam2.svg';
import examReIcon from '../../assets/images/icons/exam.svg';
import notesIcon from '../../assets/images/icons/notes.svg';
import settingsIcon from '../../assets/images/icons/settings.svg';
import claendarReIcon from '../../assets/images/icons/calendar.svg';
import '../students/student.scss';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
export default class StudentDashBoard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="student_block">
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card">
                                <div className="img_block_std">
                                    {/* <img src={attendanceIcon} alt="attendanceIcon" /> */}
                                    <GroupRoundedIcon />
                                </div>
                                <div className="text_block">
                                    <h5>Attendance</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std green_bg">
                                    <img src={listIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Class List</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std purple_bg">
                                    <img src={dateIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Time Table</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std blue_bg">
                                    <img src={examIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Exams</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std blue_green_bg">
                                    <img src={examReIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Exam Results</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std bl_whi_bg">
                                    <img src={notesIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Home Work</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std r_bg">
                                    <img src={settingsIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Settings</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="attendance card ">
                                <div className="img_block_std y_bg">
                                    <img src={claendarReIcon} alt="attendanceIcon" />
                                </div>
                                <div className="text_block">
                                    <h5>Calendar</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}