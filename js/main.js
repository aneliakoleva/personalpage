$(document).ready(function(){
    $('.single-item').slick({

        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,

    });
    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.12),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

myMap();

});
