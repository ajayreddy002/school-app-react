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
            isSelected: ''
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