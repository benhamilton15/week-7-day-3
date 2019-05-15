const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js')
const CountryInfoView = require('./views/country_info_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();

  const selectElement = document.querySelector('select#countries');
  const countriesDropDown = new SelectView(selectElement);
  countriesDropDown.bindEvents();


  const countryContainer = document.querySelector('div#country');
  const countryInfoView = new CountryInfoView(countryContainer);
  countryInfoView.bindEvents();

  countries.bindEvents();

});
