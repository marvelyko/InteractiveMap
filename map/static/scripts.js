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

L.control.scale({
  metric: true,
  imperial: false,
  position: 'topright'
}).addTo(map);

map.on("click", function (event) {
  handleClick(event.latlng);
});

function handleClick(cord) {
  var popup = document.getElementById("popup");

  popup.style.display = "block";

  lat = cord.lat;
  lng = cord.lng;
}

function popupClose() {
  var close_popup = document.getElementById("close");
  var popup = document.getElementById("popup");

  popup.style.display = "none";
}

function submitData(e){
  e.preventDefault();
  var phone = e.target.elements.phone.value;
  var name = e.target.elements.name.value;
  var comment = e.target.elements.comment.value;
  var csrfmiddlewaretoken = e.target.elements.csrfmiddlewaretoken.value;
  fetch("/add_point", {
    method: 'post',
    headers:{ 
      'Content-Type': 'application/json',
      "X-CSRFToken": csrfmiddlewaretoken },
    body: JSON.stringify({
      "phone":phone,
      "name":name,
      "comment":comment,
      "latitude":lat,
      "longtitude" : lng
    })
  }).then(window.location.reload());
}

window.onload = (e) => {
  fetch("/get_points").then(e => e.json()).then(data=>{
    for(var elem of data){
      var circle = L.circle([elem.latitude, elem.longtitude], {
          color: 'blue',
          fillColor: '#5400ff',
          fillOpacity: 0.5,
          radius: 50
      }).addTo(map);
      circle.bindPopup(`${elem.name}<br>${elem.phone}<br>${elem.comment}`);
      
    }
  })
}