import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    // Array of marker positions
    const markers = [
        { position: [51.505, -0.09], content: 'Marker 1' },
        { position: [51.51, -0.1], content: 'Marker 2' },
        { position: [51.515, -0.095], content: 'Marker 3' },
    ];

    return (
        <div className='mx-auto w-[90%]  flex justify-center'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className=' w-[80%] h-[80vh] rounded'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Map over the markers array to create multiple markers */}
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}>
                        <Popup>
                            {marker.content}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
