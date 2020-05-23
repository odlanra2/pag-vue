    function initMap() {
    //--------------------------------------------------------------------------------
    //**                  GeoLocalizacion & Configuracion del MAP                   ** 
    //--------------------------------------------------------------------------------
    /*ROADMAP (normal, default 2D map)
    SATELLITE (photographic map)
    HYBRID (photographic map + roads and city names)
    TERRAIN (map with mountains, rivers, etc.)*/
        var mapOptions = {
          center: new google.maps.LatLng(4.6294778,-74.1209787,17),
          zoom: 16,
          zoomControl:true,
          zoomControlOptions:true,
          scrollwheel:false,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById("mapa_div"),
            mapOptions);
    //--------------------------------------------------------------------------------
    //**                            Marcador del Mapa                               ** 
    //--------------------------------------------------------------------------------
         var myLatlng = new google.maps.LatLng(4.6294778,-74.1209787,17);
        var marker = new google.maps.Marker({
		    position: myLatlng,
		    title:"Resort Islas Del Sol"
		});
        	marker.setMap(map);

}