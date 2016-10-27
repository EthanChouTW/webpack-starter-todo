require('./lib/css/style.css');
import $ from 'jquery';
import getForm from "./lib/js/form.data.js";
import insertData from "./lib/js/insertData.js";
import deleteData from "./lib/js/deleteData.js";

let form = $("form");

form.on('submit', function (e) {
	e.preventDefault();
	var value = getForm(e);
  console.log(value);
  if (value.length > 0) {
    insertData(value);
  }

});

let ul = $('ul');
ul.on('click','li', (event) => {
  deleteData(event.target);
})