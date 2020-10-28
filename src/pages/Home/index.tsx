import React, { useState } from 'react';
import * as S from './styles';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';

import { FiStar } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import MapMarker from '../../assets/marker-map.svg';
import MapMarkerSelect from '../../assets/marker-map-select.svg';

const Home = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [locations, setLocations] = useState([{ latitude: 0, longitude: 0 }]);

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setPosition({ latitude: lat, longitude: lng });
  };

  const handleFavoritePosition = () => {
    const existPosition = locations.find(
      (loc) => loc.latitude === position.latitude
    );

    if (existPosition) return;
    setLocations([...locations, position]);
  };

  return (
    <>
      <S.Img src={Logo} alt="" />
      <S.BoxFloat>
        <S.Wrapper>
          <S.Text>
            Lat <span>{position.latitude}</span>
          </S.Text>
          <S.Text>
            Long <span>{position.longitude}</span>
          </S.Text>
          <S.Buttons>
            <S.Button styleButton="text">copy</S.Button>
            <S.Button styleButton="icon" onClick={handleFavoritePosition}>
              <FiStar color=" #ffb86c" />
            </S.Button>
            <div></div>
            <div></div>
          </S.Buttons>
        </S.Wrapper>
      </S.BoxFloat>
      <Map
        center={[-8.8229483, -44.2194616]}
        zoom={15}
        style={{ width: '100%', height: '70%' }}
        onClick={handleMapClick}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          interactive={true}
          icon={L.icon({
            iconUrl: MapMarker,
            iconSize: [58, 68],
            iconAnchor: [29, 68],
            popupAnchor: [0, -60],
          })}
          position={[position.latitude, position.longitude]}
        />

        {locations.map((location) => (
          <Marker
            key={location.latitude}
            interactive={true}
            icon={L.icon({
              iconUrl: MapMarkerSelect,
              iconSize: [58, 68],
              iconAnchor: [29, 68],
              popupAnchor: [0, -60],
            })}
            position={[location.latitude, location.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              OIIIIIII
            </Popup>
          </Marker>
        ))}
      </Map>
    </>
  );
};

export default Home;
