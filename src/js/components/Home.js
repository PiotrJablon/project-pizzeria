import {select} from '../settings.js';
import {app} from '../app.js';

class Home{
  constructor(){
    const thisHome = this;

    thisHome.getElements();
    thisHome.changePage();
  }
  getElements(){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.order = document.querySelector(select.home.order);
    thisHome.dom.book = document.querySelector(select.home.book);
  }
  changePage(){
    const thisHome = this;

    thisHome.dom.order.addEventListener('click', function(){
      app.activatePage('order');
      window.location.hash = '#/order';
    });
    thisHome.dom.book.addEventListener('click', function(){
      app.activatePage('booking');
      window.location.hash = '#/booking';
    });
  }
}

export default Home;
