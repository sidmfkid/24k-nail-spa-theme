// ************ Open Mobile Menu *************//

const hamburgerBtn = document.querySelector('.hamburger-button');

if (window.innerWidth <= 899) {
    hamburgerBtn.setAttribute('aria-hidden', false);
}
console.log(window.innerWidth)
console.log(hamburgerBtn.ariaHidden)
const openMenu = () => {
    const navlinkContainer = document.querySelector('.navlink__container');
    const overlay = document.querySelector('.overlay');
    const navContainer = document.querySelector('.nav-container');
    navlinkContainer.classList.toggle('open')
    overlay.classList.toggle('open')
    navContainer.classList.toggle('open')
    hamburgerBtn.classList.toggle('open')
}

hamburgerBtn.addEventListener('click', openMenu)

// ************ Intersection Observer ************* //






let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

// let observer = new IntersectionObserver(getWidth, options)

var mymap = L.map('map').setView([39.86958470503101, -86.1443831200598], 18);
var circle = L.circle([39.86958470503101, -86.1443831200598], {
    color: 'red',
    fillColor: '#ff00f7',
    fillOpacity: 0.5,
    radius: 6
}).addTo(mymap);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2lkZm1raWQiLCJhIjoiY2t3NWowOHYyMHBpeDJubzBoZnhtdmtrZSJ9.ytX4VQV61QXM9eD83RQfZw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);