mapboxgl.accessToken =
    "pk.eyJ1IjoicmFmaXVpc2xhbSIsImEiOiJja3N5c3kyYWExcDYwMndzMWMwaHZybHhyIn0.m7Ei2K7IfG5faeADAat4IQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    console.log(position);
    centerMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    centerMap([55.755, 37.6173]);
}

function centerMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    });

    map.addControl(directions, "top-left");
}
