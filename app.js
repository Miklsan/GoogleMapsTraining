"use strict"

function initMap() {
    //map options
    const options = {
        zoom: 8,
        center: { lat: 48.864716, lng: 2.349014 }
    }
    //new map
    const map = new google.maps.Map(document.getElementById('map'), options)

    //Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
        //add Marker
        addMarker({ coords: event.latLng })
    })
    /*
        //add marker
    
        const marker = new google.maps.Marker({
            position: { lat: 48.611401, lng: 2.305900 },
            map: map,
            //choisir l'icone du marker
            icon: 'https://github.com/googlemaps/v3-utility-library/blob/master/packages/markerclustererplus/images/heart50.png?raw=true'
    
        })
        // faire apparaitre un titre sur l'icone
        const infoWindow = new google.maps.InfoWindow({
            content: '<h1>Brétigny sur Orge</h1>'
        })
        marker.addListener('click', function () {
            infoWindow.open(map, marker)
        })*/

    // Array of markers
    let markers = [
        {
            coords: { lat: 48.611401, lng: 2.305900 },
            iconImage: 'https://github.com/googlemaps/v3-utility-library/blob/master/packages/markerclustererplus/images/heart50.png?raw=true',
            content: '<h1>Bretigny sur Orge</h1>'
        },
        {
            coords: { lat: 48.6298, lng: 2.4418 },
            content: '<h1>Evry</h1>'
        }

    ]

    //Loop through markers
    for (let i = 0; i < markers.length; i++) {
        //Add Marker
        addMarker(markers[i])
    }

    //add Marker function

    function addMarker(props) {
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //choisir l'icone du marker
            //icon: props.iconImage

        })
        //check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage)
        }
        // check content
        if (props.content) {
            const infoWindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener('click', function () {
                infoWindow.open(map, marker)
            })
        }
    }
}