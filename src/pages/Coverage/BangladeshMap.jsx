import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'


const position = [23.8103, 90.4125];

const BangladeshMap = ({ serviceCenters, selectedDistrict }) => {

    //Helper component to control pan
    const MapController= ({selectedDistrict})=>{
        const map= useMap(); 
        useEffect(()=>{
            if(selectedDistrict){
                map.flyTo(
                    [selectedDistrict.latitude, selectedDistrict.longitude],
                    10, //zoom level
                    {
                        duration: 2
                    }
                )
            }
        },[selectedDistrict, map])

        return null; 
    }

    return (
        <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController selectedDistrict={selectedDistrict}/>
            {
                serviceCenters.map((center, idx) => (<Marker key={idx} position={[center.latitude, center.longitude]}>
                    <Popup>
                        <strong>{center.district}</strong>
                        <br/>
                        {center.name}
                    </Popup>
                </Marker>))
            }
        </MapContainer>
    )
}

export default BangladeshMap; 