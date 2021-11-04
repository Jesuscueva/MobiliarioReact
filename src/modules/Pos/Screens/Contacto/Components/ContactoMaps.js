import React from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const ContactoMaps = () => {
    const position = [-12.010705, -77.034109]    
    return (
        <div class="contenedor__map_">
            <div class="title title_map">
                Ubicanos
            </div>
            <div class="wrapper__map_">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.235561521659!2d-77.03402061084905!3d-12.011052731499998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf132f8e50c9%3A0x9acf42b7f6793262!2sEJECUTA!5e0!3m2!1ses!2spe!4v1626985950116!5m2!1ses!2spe" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>,
            </div>
        </div>
    )
}

export default ContactoMaps
