import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const position = [23.8103, 90.4125]; 

const BangladeshMap = ({ serviceCenters }) => {

    //console.log([serviceCenters[0].latitude, serviceCenters[0].latitude]);

    return (
        <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                serviceCenters.map((center, idx)=>(<Marker key={idx} position={[center.latitude, center.longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br />
                </Popup>
            </Marker>))
            }
        </MapContainer>
    )
}

export default BangladeshMap; 