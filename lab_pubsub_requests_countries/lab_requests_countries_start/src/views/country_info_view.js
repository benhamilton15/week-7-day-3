const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
this.container = container;
}

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('CountryInfo:selected-country', (event)=>{
    const countryDetails = event.detail;
    this.render(countryDetails);
  })
}

CountryInfoView.prototype.render = function(country){
  this.container.innerHTML = " ";

  const countryName = this.createElement('h2', country.name);
  this.container.appendChild(countryName);

  var countryFlag = document.createElement("img");
  countryFlag.src = country.flag;
  this.container.appendChild(countryFlag);

  const countryRegionTitle = this.createElement('h2', 'Region:');
  this.container.appendChild(countryRegionTitle);

  const countryRegion = this.createElement('h3', country.region);
  this.container.appendChild(countryRegion);

  const countryLanguageTitle = this.createElement('h2', 'Languages:');
  this.container.appendChild(countryLanguageTitle);

  const countryLanguage = this.createLanguageList(country.languages);
  this.container.appendChild(countryLanguage);
};

CountryInfoView.prototype.createElement = function(elementType, text){
  const element = document.createElement(elementType)
  element.textContent = text;
  return element;
}

CountryInfoView.prototype.createLanguageList = function(languages){
  const list = document.createElement('ul');

    languages.forEach((language)=>{
      const listItem = document.createElement('li');
      listItem.textContent = language.name;
      list.appendChild(listItem);
    })
    return list;
}



module.exports = CountryInfoView;
