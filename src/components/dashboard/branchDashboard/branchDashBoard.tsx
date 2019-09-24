import React, { Component } from 'react';
import studentIcon from '../../../assets/images/icons/classmates.svg';
import moenyIcon from '../../../assets/images/icons/money.svg';
import teacherIcon from '../../../assets/images/icons/teacher.svg';
// import branchIcon from '../../assets/images/icons/branch.svg';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import '../../dashboard/dashBoard.scss';
export class BranchDashBoard extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            cards: [
                { title: 'Students', total: 200, image: studentIcon },
                { title: 'Teachers', total: 20, image: studentIcon },
                { title: 'Parents', total: 10, image: studentIcon },
                { title: 'Syllabus', total: 200000, image: studentIcon },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="main_block_das">
                    <div className="row m-0">
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="img_block">
                                            <img src={studentIcon} alt="student"></img>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="txt_block">
                                            <p>Students</p>
                                            <h4>2000 </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="img_block blue_bg">
                                            <img src={teacherIcon} alt="student"></img>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="txt_block">
                                            <p>Teachers</p>
                                            <h4>20 </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="img_block yellow_bg">
                                            <img src={moenyIcon} alt="student"></img>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="txt_block">
                                            <p>Parents</p>
                                            <h4>200 </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="img_block red_bg">
                                            <AccountTreeRoundedIcon />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="txt_block">
                                            <p>Syllabus</p>
                                            <h4>10 </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BranchDashBoard;