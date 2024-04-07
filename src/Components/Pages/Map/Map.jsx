import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ areaData }) => {
    const markers = areaData.map((data) => {
        return {
            position: [data.latitude, data.longitude],
            content: data.city_name // Assuming you have some content property in your data
        }
    });

    return (
        <div className='mx-auto w-[90%] flex justify-center'>
            <MapContainer center={[23.6850, 90.3563]} zoom={7} scrollWheelZoom={false} className='w-[80%] h-[80vh] rounded'>
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
