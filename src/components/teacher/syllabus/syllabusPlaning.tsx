import React from 'react';
import '../syllabus/syllabusPlaning.scss';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default class SyllabusPlaningComponent extends React.Component {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            todoData: [
                {
                    id: 1, date: '20 Feb 2019', title: 'Social', from_time: '9:30 Am',
                    to_time: '10:30 Am', class_name: '9th standard', plan_for: 'Quarterly'
                },
                {
                    id: 2, date: '21 March 2019', title: 'Telugu', from_time: '10:30 Am',
                    to_time: '11:30 Am', class_name: '6th standard', plan_for: 'Quarterly'
                },
                {
                    id: 3, date: '21 March 2019', title: 'Maths', from_time: '01:30 Pm',
                    to_time: '02:30 Pm', class_name: '7th standard', plan_for: 'Quarterly'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="card_main">
                    <div className="sub_block">
                        <div className="card_header_block">
                            <div className="card_header_text">
                                <h4>Planing Board</h4>
                                <div className="filter_block">
                                    <div className="icon_block">
                                        <div className="search">
                                            <SearchRoundedIcon />
                                        </div>
                                        <div className="filter">
                                            <FilterListRoundedIcon />
                                        </div>
                                        <div className="filter">
                                            <NotificationsRoundedIcon />
                                        </div>
                                    </div>
                                    <div className="txt_block">
                                        <button type="button" className="all">All boards</button>
                                        <button type="button" className="new">Create new</button>
                                    </div>
                                    <div className="icon_block">
                                        <div className="filter">
                                            <ViewModuleIcon />
                                        </div>
                                        <div className="filter">
                                            <DehazeIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Cards block */}
                        <div className="main_card_body">
                            <div className="crads_block">
                                <div className="cards_sub">
                                    <div className="card_txt_block">
                                        <h5>Todo</h5>
                                        <MoreHorizIcon />
                                    </div>
                                    <div className="count">
                                        <h6>3 New Tasks</h6>
                                    </div>
                                    {this.state.todoData.map((item: any) => 
                                        <div className="card card_body" key={item.id}>
                                            <div className="content_block">
                                                <div className="date_block">
                                                    <h6>{item.date}</h6>
                                                    <MoreVertIcon />
                                                </div>
                                                <div className="content_txt_block">
                                                    <div className="content_title">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="timings">
                                                        <p>From</p>
                                                        <p>{item.from_time}</p>
                                                    </div>
                                                    <div className="timings">
                                                        <p>To</p>
                                                        <p>{item.to_time}</p>
                                                    </div>
                                                    <div className="subject">
                                                        <p>Class Name</p>
                                                        <p className="dark_color">{item.class_name}</p>
                                                    </div>
                                                    <div className="subject">
                                                        <p>Plan for</p>
                                                        <p>{item.plan_for}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="card card_body red_bg">
                                        <div className="content_block">
                                            <div className="date_block">
                                                <h6>20 Feb 2019</h6>
                                                <MoreVertIcon />
                                            </div>
                                            <div className="content_txt_block">
                                                <div className="content_title">
                                                    <h3>Science lab</h3>
                                                </div>
                                                <div className="timings">
                                                    <p>From</p>
                                                    <p>9:30 Am</p>
                                                </div>
                                                <div className="timings">
                                                    <p>To</p>
                                                    <p>10:30 Am</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Class Name</p>
                                                    <p className="dark_color">10th Standard</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Plan for</p>
                                                    <p>Quarterly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* In Progress */}
                            <div className="crads_block inprogress">
                                <div className="cards_sub">
                                    <div className="card_txt_block">
                                        <h5>In Progress</h5>
                                        <MoreHorizIcon />
                                    </div>
                                    <div className="count">
                                        <h6>3  Tasks</h6>
                                    </div>
                                    <div className="card card_body yellow_bg">
                                        <div className="content_block">
                                            <div className="date_block">
                                                <h6>20 Feb 2019</h6>
                                                <MoreVertIcon />
                                            </div>
                                            <div className="content_txt_block">
                                                <div className="content_title">
                                                    <h3>Science lab</h3>
                                                </div>
                                                <div className="timings">
                                                    <p>From</p>
                                                    <p>9:30 Am</p>
                                                </div>
                                                <div className="timings">
                                                    <p>To</p>
                                                    <p>10:30 Am</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Class Name</p>
                                                    <p className="dark_color">10th Standard</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Plan for</p>
                                                    <p>Quarterly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card_body blue_bg">
                                        <div className="content_block">
                                            <div className="date_block">
                                                <h6>20 Feb 2019</h6>
                                                <MoreVertIcon />
                                            </div>
                                            <div className="content_txt_block">
                                                <div className="content_title">
                                                    <h3>Science lab</h3>
                                                </div>
                                                <div className="timings">
                                                    <p>From</p>
                                                    <p>9:30 Am</p>
                                                </div>
                                                <div className="timings">
                                                    <p>To</p>
                                                    <p>10:30 Am</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Class Name</p>
                                                    <p className="dark_color">10th Standard</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Plan for</p>
                                                    <p>Quarterly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="crads_block inprogress">
                                <div className="cards_sub">
                                    <div className="card_txt_block">
                                        <h5>Done</h5>
                                        <MoreHorizIcon />
                                    </div>
                                    <div className="count">
                                        <h6>1 Task</h6>
                                    </div>
                                    <div className="card card_body">
                                        <div className="content_block">
                                            <div className="date_block">
                                                <h6>20 Feb 2019</h6>
                                                <MoreVertIcon />
                                            </div>
                                            <div className="content_txt_block">
                                                <div className="content_title">
                                                    <h3>Science lab</h3>
                                                </div>
                                                <div className="timings">
                                                    <p>From</p>
                                                    <p>9:30 Am</p>
                                                </div>
                                                <div className="timings">
                                                    <p>To</p>
                                                    <p>10:30 Am</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Class Name</p>
                                                    <p className="dark_color">10th Standard</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Plan for</p>
                                                    <p>Quarterly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card_body blue_bg">
                                        <div className="content_block">
                                            <div className="date_block">
                                                <h6>20 Feb 2019</h6>
                                                <MoreVertIcon />
                                            </div>
                                            <div className="content_txt_block">
                                                <div className="content_title">
                                                    <h3>Science lab</h3>
                                                </div>
                                                <div className="timings">
                                                    <p>From</p>
                                                    <p>9:30 Am</p>
                                                </div>
                                                <div className="timings">
                                                    <p>To</p>
                                                    <p>10:30 Am</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Class Name</p>
                                                    <p className="dark_color">10th Standard</p>
                                                </div>
                                                <div className="subject">
                                                    <p>Plan for</p>
                                                    <p>Quarterly</p>
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
        )
    }
}