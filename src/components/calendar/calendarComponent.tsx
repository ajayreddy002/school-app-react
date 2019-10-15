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
            datesObje: moment()
        }
        this.state.days = moment.weekdaysShort();
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
    selectDate(selectedDay: any, i: number){
        this.selectedDay = selectedDay.value;
    }
    render() {
        const date = new Date();
        const currentDate = date.toLocaleString('en-US').split(',')[0];
        return (
            <div className="calendar_main">
                <div className="row">
                    <div className="col-md-7 col-sm-12">

                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className='calendar'>
                            <div className='month'>
                                <i className="fas fa-arrow-left left left" onClick={() => this.changeMonth(-1, 'month')}></i>
                                {this.state.datesObje.format('MMMM YYYY')}
                                <i className="fas fa-arrow-right right" onClick={() => this.changeMonth(1, 'month')}></i>
                            </div>
                            <ul className='weekdays'>
                                {this.state.days.map((item: any, i: number) =>
                                    <li className='weekday' key={i}>
                                        {item}
                                    </li>
                                )}
                            </ul>
                            <ul className='week'>
                                {this.daysGridArr.map((day: any, i: number) =>
                                    <li className={'day' + (day.value === parseInt(this.viewMonth.format('DD'))
                                        && currentDate === this.viewMonth.format('MM/DD/YYYY') ? ' now' : '' + 
                                        day.value === this.selectedDay ? ' selected':'')}
                                        key={i}
                                        onClick={() => this.selectDate(day, i)}>
                                        {day.value === 0 &&
                                            <span className='mute'>

                                            </span>
                                        }
                                        {day.value !== 0 &&
                                            day.value
                                        }
                                    </li>
                                )}
                                {/* <li className='day now'>
                                    15
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}