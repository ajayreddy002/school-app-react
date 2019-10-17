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
        const date = new Date();
        const currentDate = date.toLocaleString('en-US').split(',')[0];
        return (
            <div className="calendar_main">
                <div className="row">
                    <div className="col-md-8">
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
                </div>
            </div>
        )
    }
}