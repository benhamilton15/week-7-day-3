const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')

const Countries = function(){
  this.text = null;
}

Countries.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all')
  request.get((data)=> {
    this.text = data
    PubSub.publish('Countries:all-countries', this.text)
  })
}

Countries.prototype.bindEvents = function(){
  PubSub.subscribe('Selectview:change', (event)=>{
    const selectedIndex = event.detail;
    this.publishCountryInfo(selectedIndex);
  })
}

Countries.prototype.publishCountryInfo = function(selectedIndex){
  const selectedCountry = this.text[selectedIndex];
  PubSub.publish('CountryInfo:selected-country', selectedCountry)
}

module.exports = Countries;
