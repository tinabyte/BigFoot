import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// import {bigfoot_sightings} from "./data_processing";

const polylinePath = [[29.648041, -82.343772], [29.659112, -82.411823]];

// Component to update map center
const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.flyTo(center, zoom);
    return null;
};

const MyMap = () => {
    const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Initial position
    const zoom = 13;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                setMapCenter([lat, lon]); // Update map center
            }, (error) => {
                console.log(`Error: ${error.message}`);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <MapContainer center={mapCenter} zoom={zoom} style={{ height: "60vh", width: "60%" }}>
            <ChangeView center={mapCenter} zoom={zoom} />
            <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
            />
            {/*<Polyline pathOptions={{color: 'purple'}} positions={polylinePath} /> /!* Adds the Polyline to the map *!/*/}
            {/*{*/}
            {/*    bigfoot_sightings.map((sighting, index) => (*/}
            {/*        <Marker key={index} position={[sighting.latitude, sighting.longitude]}>*/}
            {/*            <Popup>*/}
            {/*                <h2>{sighting.title}</h2>*/}
            {/*                <p>{sighting.observed}</p>*/}
            {/*            </Popup>*/}
            {/*        </Marker>*/}
            {/*    ))*/}
            {/*}*/}
        </MapContainer>
    );
};

export default MyMap;
