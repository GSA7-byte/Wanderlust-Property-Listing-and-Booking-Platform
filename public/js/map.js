mapboxgl.accessToken = mapToken;

// 1. Determine safe coordinates (check if geometry exists)
const coordinates = (listing.geometry && listing.geometry.coordinates.length) 
  ? listing.geometry.coordinates 
  : [77.209, 28.613]; // Default fallback to Delhi

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9,
});

// 2. Only add marker if coordinates actually exist in DB
if (listing.geometry && listing.geometry.coordinates.length) {
  new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h5><i>${listing.title}</i></h5><p>Exact location will be provided after booking</p>`)
    )
    .addTo(map);
}
