function initMap() {
  var kiev = { lat: 50.4595490, lng: 30.6172020 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: kiev
  });
  var marker = new google.maps.Marker({ position: kiev, map: map });
}
