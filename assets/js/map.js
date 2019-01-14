function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(53.351599, -6.332696),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
