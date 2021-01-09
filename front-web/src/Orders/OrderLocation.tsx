import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
//import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';


//const initialPosition = {
    const position = {
    lat: -25.4165761,
    lng: -50.0030592
}


function OrderLocation() {
    return (
        <div className="order-location-container">
        <div className="order-location-content">
            <h3 className="order-location-title">
                Selecione onde o pedido deve ser entregue:
            </h3>
            <div className="filter-container">
            
            </div>
            <MapContainer 
              center={position} 
              zoom={13} 
              scrollWheelZoom>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Meu marcador
                    </Popup>
                </Marker>
            </MapContainer>
            
        </div>
    </div>
    )


    /*
                <AsyncSelect 
                    placeholder="Digite um endereço para entregar o pedido"
                    className="filter"
                    loadOptions={loadOptions}
                    onChange={value => handleChangeSelect(value as Place)}
                />

    


            */

/*



type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}

      function OrderLocation(){
        const [address, setAddress] = useState<Place>({
            position: initialPosition 
        });
         
        const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
            const response = await fetchLocalMapBox(inputValue);
          
            const places = response.data.features.map((item: any) => {
              return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                  lat: item.center[1],
                  lng: item.center[0]
                }
              });
            });
          
            callback(places);
          };
          
          const handleChangeSelect = (place: Place) => {
            setAddress(place);
           // onChangeLocation({
           //   latitude: place.position.lat,
           //   longitude: place.position.lng,
           //   address: place.label!
           // });
          };


    return (

    )
}*/
}

export default OrderLocation;