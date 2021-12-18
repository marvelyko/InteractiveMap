var lat = 0;
var lng = 0;

var map = L.map("map").setView([41.719562, 44.788718], 8);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=23gNtsMw6Lr7QuwmLLh6",
  {
    atributtion:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

map.on("click", function (event) {
  handleClick(event.latlng);
});

function handleClick(cord) {
  var popup = document.getElementById("popup");

  popup.style.display = "block";

  lat = cord.lat;
  lng = cord.lng;

  console.log(lat, lng);
}

function popupClose() {
  var close_popup = document.getElementById("close");
  var popup = document.getElementById("popup");

  popup.style.display = "none";
}
