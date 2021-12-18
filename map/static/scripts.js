var lat = 0;
var lng = 0;

function handleClick(cord){
    var popup = document.getElementById('popup');

    popup.style.display = 'block';

    lat = cord.lat;
    lng = cord.lng;

    console.log(lat,lng)
}