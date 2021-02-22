import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }
  render(element){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};

    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.wrapper.datePicker = document.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.wrapper.hourPicker = document.querySelector(select.widgets.hourPicker.wrapper);
    thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);
  }
  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.datePicker = new DatePicker(thisBooking.dom.wrapper.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.wrapper.hourPicker);
  }
}

export default Booking;
