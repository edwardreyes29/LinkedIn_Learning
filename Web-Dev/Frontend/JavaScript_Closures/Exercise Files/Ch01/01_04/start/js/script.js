'use strict';

// can be reused by created separated references to its variables from closures.
function updateClicks() {
  let clicks = {};
  // let button;
  function reportClicks(item) {
    // button = menu.id;
    clicks[item] = clicks[item] + 1 || 1;
    console.log(item, clicks);
  }
  return reportClicks;
}

const reportActivities = updateClicks(); // for activities
const reportProducts = updateClicks(); // for products

const activities = {
  teamIn: ['basketball','hockey','volleyball'],
  teamOutWarm: ['softball/baseball','football/soccer','American football','rowing','tennis','volleyball','ultimate frisbee','rugby'],
  teamOutCold: ['hockey'],
  soloIn: ['rock climbing','swimming','ice skating'],
  soloOutWarm: ['rowing','running','hiking','cycling','rock climbing'],
  soloOutCold: ['snowshoeing','downhill skiing','cross-country skiing','ice skating']
};
let state = {};
let category = 'all';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = "de36e36780976652d3e84a5502633fce"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
function updateActivityList(event) {
  if (event !== undefined && event.target.classList.contains('selected')) {
    return true;
  } else if (event !== undefined && !event.target.classList.contains('selected')) {
    category = event.target.id;
    document.querySelectorAll('.options div').forEach(function(el) {
      el.classList.remove('selected');
    });
    event.target.classList.add('selected');
  } 

  state.activities = [];
  if (state.condition === "Rain") {
    updateState('In');
  } else if (state.condition === "Snow" || state.degFInt < 50) {
    updateState('OutCold');
  } else {
    updateState('OutWarm');
  }

  function updateState(type) {
    if (category === 'solo') {
      state.activities.push(...activities['solo' + type]);
    } else if (category === 'team') {
      state.activities.push(...activities['team' + type]);
    } else {
      state.activities.push(...activities['solo' + type]);
      state.activities.push(...activities['team' + type]);
    }
  }

  let activitiesContainer = `<ul>`;
  state.activities.forEach(function(activity,index) {
    activitiesContainer += `<li key="${index}">${activity}</li>`
  });
  activitiesContainer += `</ul>`;
  
  document.querySelector('.activities').innerHTML = activitiesContainer;
  document.querySelector('.results').classList.add('open');
}
function updateUISuccess(response) {
  const degC = response.main.temp - 273.15;
  const degF = degC * 1.8 + 32;
  state = {
    condition: response.weather[0].main,
    icon: 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png',
    degCInt: Math.floor(degC),
    degFInt: Math.floor(degF),
    city: response.name
  };

  document.querySelector('.conditions').innerHTML = `
    <p class="city">${state.city}</p>
    <p>${state.degCInt}\u00B0 C / ${state.degFInt}\u00B0 F
      <img src="${state.icon}" alt="${state.condition}">
    </p>
  `; 

  updateActivityList();
}
function updateUIFailure() {
  document.querySelector('.conditions').textContent = 'Weather information unavailable';
}

// get weather data when user clicks Forecast button, then add temp & conditions to view
document.querySelector('.forecast-button').addEventListener('click', function(e) {
  e.preventDefault();
  const location = document.querySelector('#location').value;
  document.querySelector('#location').value = '';
  fetch(url + location + '&appid=' + apiKey).then(function(response) {
    return(response.json());
  }).then(function(response) {
    updateUISuccess(response);
  }).catch(function(response) {
    updateUIFailure();
  });
}, false);

// update list of sports when user selects a different category (solo/team/all)
document.querySelectorAll('.options div').forEach(function(el) {
  el.addEventListener('click', function(event) {
    updateActivityList(event);
    reportActivities(event.target.id);
  }, false);
});

// Create event listener for products
document.querySelectorAll('.product-image').forEach(function(el) {
  el.addEventListener('mouseenter', function(event) {
    // Pass unique text string that identifies gallery item mouse has entered.
    reportProducts(event.target.nextElementSibling.textContent)
  },false);
});