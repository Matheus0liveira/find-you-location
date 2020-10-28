import React from 'react';
import * as S from './styles';
import { Map, TileLayer } from 'react-leaflet';
import Logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <>
      <S.Img src={Logo} alt="" />
      <S.BoxFloat></S.BoxFloat>
      <Map
        center={[-8.8229483, -44.2194616]}
        zoom={15}
        style={{ width: '100%', height: '70%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
    </>
  );
};

export default Home;
