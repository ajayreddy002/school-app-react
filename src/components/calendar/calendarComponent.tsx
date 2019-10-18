import React from 'react';
import moment from 'moment';
import '../calendar/calendarComponent.scss'
export default class CalendarComponent extends React.Component {
    public state: any;
    viewMonth: any;
    daysGridArr: any = [];
    selectedDay: any;
    constructor(props: any) {
        super(props)
        this.state = {
            days: [],
            datesObje: moment(),
            isSelected: '',
            daysFullNames: []
        }
        this.state.days = moment.weekdaysShort();
        this.state.daysFullNames = moment.weekdays();
        this.viewMonth = moment();
        this.changeMonth = this.changeMonth.bind(this);
        this.daysGrid = this.daysGrid.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.daysGrid();
    }
    changeMonth(num: number, datePart: string) {
        this.setState({
            datesObje: this.viewMonth.add(num, datePart)
        });
        this.setState({
            isSelected: ''
        })
        this.daysGrid();
    }
    daysGrid() {
        this.daysGridArr = []
        const firstDayOfMonth = moment(this.viewMonth).startOf('month');
        const intialEmptyDays = firstDayOfMonth.weekday();
        const lastDayDate = moment(this.viewMonth).endOf('month');
        const lastEmptyCells = 6 - lastDayDate.weekday();
        const daysInMonth = this.viewMonth.daysInMonth();
        const arrayLength = intialEmptyDays + lastEmptyCells + daysInMonth;
        for (let i = 0; i < arrayLength; i++) {
            let obj: any = {};
            if (i < intialEmptyDays || i > intialEmptyDays + daysInMonth - 1) {
                obj.value = 0;
            } else {
                obj.value = i - intialEmptyDays + 1;
            }
            this.daysGridArr.push(obj);
        }
    }
    selectDate(selectedDay: any, i: number) {
        this.selectedDay = selectedDay.value;
        this.setState({
            isSelected: i
        })
        // this.selectedDay = selectedDay.value;
        // console.log(this.selectedDay);
        // console.log(typeof (this.selectedDay));
    }
    render() {
        // const date = new Date();
        // const currentDate = date.toLocaleString('en-US').split(',')[0];
        return (
            <div className="calendar_main">
                {/* <div className="row">
                    <div className="col-md-8 spiral">
                        <div className="text_block">
                            <h2>Daily Routine</h2>
                        </div>
                        <div className="tt_block">
                            <div className="row header m-0 row_header">
                                <div className="col-md-3 col-sm-6">
                                    <p>Day</p>
                                </div>
                                <div className="col-md-3 col-sm-6 ml-3">
                                    <p>Time Slot</p>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p>Subject</p>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p>Teacher</p>
                                </div>
                            </div>
                            <div className="row body_row">
                                <div className="col-md-3">
                                    <div className="days_names">
                                        {this.state.days.slice(1, 7).map((days: string, index: number) =>
                                            <p key={index}>{days}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div>
                                        <p>8:30Am - 9:00Am</p>
                                    </div>
                                    <div>
                                        <p>9:15Am - 10:00Am</p>
                                    </div>
                                    <div>
                                        <p>10:00Am - 10:45Am</p>
                                    </div>
                                    <div>
                                        <p>10:50Am - 11:45Am</p>
                                    </div>
                                    <div>
                                        <p>11:50Am - 12:50Pm</p>
                                    </div>
                                    <div>
                                        <p>2:00Pm - 2:45Pm</p>
                                    </div>
                                    <div>
                                        <p>2:50Pm - 3:45Pm</p>
                                    </div>
                                    <div>
                                        <p>3:50Pm - 4:30Pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="main-container-wrapper">
                            <div className="jzdbox1 jzdbasf jzdcal">
                                <div className="calendar-container__header pb-1">
                                    <i className="fas fa-arrow-left left" onClick={() => this.changeMonth(-1, 'month')}></i>
                                    <div className="calendar-container__title">{this.state.datesObje.format('MMMM YYYY')}</div>
                                    <i className="fas fa-arrow-right right" onClick={() => this.changeMonth(1, 'month')}></i>
                                </div>

                                <div className="calendar-table__header">
                                    <div className="calendar-table__row">
                                        {this.state.days.map((item: any, i: number) =>
                                            <div key={i} className="calendar-table__col">{item}</div>
                                        )}
                                    </div>
                                </div>
                                {this.daysGridArr.map((date: any, i: number) =>
                                    <React.Fragment key={i}>
                                        {date.value !== 0 &&
                                            <span onClick={() => this.selectDate(date, i)} className={`${(date.value === parseInt(this.viewMonth.format('DD'))
                                                && currentDate === this.viewMonth.format('MM/DD/YYYY') ? 'circle' : '')}${(this.state.isSelected === i && this.selectedDay === date.value ? 'selected' : '')}`}>
                                                {date.value}
                                            </span>
                                        }
                                        {date.value === 0 &&
                                            <span></span>
                                        }
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="tt_block">
                    <div className="header_block">
                        <h3>School Timetable</h3>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Time</th>
                                <th scope="col">Monday</th>
                                <th scope="col">Tuesday</th>
                                <th scope="col">Wednesday</th>
                                <th scope="col">Thursday</th>
                                <th scope="col">Friday</th>
                                <th scope="col">Sarurday </th>
                            </tr>
                        </thead>
                        <tbody className="table_body">
                            <tr>
                                <th scope="row">08:45Am - 09:00Am</th>
                                <td colSpan={6} className="text-center bg">Prayer</td>
                            </tr>
                            <tr>
                                <th scope="row">09:05Am - 09:50Am</th>
                                <td>Telugu</td>
                                <td>English</td>
                                <td>Social</td>
                                <td>Maths</td>
                                <td>Science</td>
                                <td>Telugu</td>
                            </tr>
                            <tr>
                                <th scope="row">09:55Am - 10:40Am</th>
                                <td>Social</td>
                                <td>Maths</td>
                                <td>English</td>
                                <td>Physics</td>
                                <td>Telugu</td>
                                <td>Science</td>
                            </tr>
                            <tr>
                                <th scope="row">10:45Am - 11:35Am</th>
                                <td>English</td>
                                <td>Social</td>
                                <td>Maths</td>
                                <td>Science</td>
                                <td>Physics</td>
                                <td>Telugu</td>
                            </tr>
                            <tr>
                                <th scope="row">11:40Am - 12:45Pm</th>
                                <td>Telugu</td>
                                <td>Social</td>
                                <td>Physics</td>
                                <td>Maths</td>
                                <td>English</td>
                                <td>Science</td>
                            </tr>
                            <tr>
                                <th scope="row">12:45Pm - 01:45Pm</th>
                                <td colSpan={6} className="text-center ybg">Lunch</td>
                            </tr>
                            <tr>
                                <th scope="row">01:45Pm - 02:30Pm</th>
                                <td>Social</td>
                                <td>Physics</td>
                                <td>Maths</td>
                                <td>Telugu</td>
                                <td>English</td>
                                <td>Science</td>
                            </tr>
                            <tr>
                                <th scope="row">02:35Pm - 03:40Pm</th>
                                <td>Science</td>
                                <td>Telugu</td>
                                <td>Social</td>
                                <td>Physics</td>
                                <td>Maths</td>
                                <td>English</td>
                            </tr>
                            <tr>
                                <th scope="row">03:45Pm - 04:30Pm</th>
                                <td colSpan={6} className="text-center gbg">PET</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}