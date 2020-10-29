import styled, { css } from 'styled-components';

interface PropsButton {
  styleButton: 'text' | 'icon';
}

export const Img = styled.img`
  position: absolute;
  top: 3rem;
`;

export const BoxFloat = styled.div`
  position: absolute;
  top: 16.5%;
  z-index: 9999;

  width: 50%;
  height: 200px;
  background: #fff;

  padding: 1.6rem 4rem;

  border: 2px solid #282a36;
  border-radius: 2rem;
  box-shadow: 0px 123px 302px rgba(0, 0, 0, 0.0443409),
    0px 13.3395px 60.298px rgba(0, 0, 0, 0.0497168),
    0px 13.0517px 18.6697px rgba(0, 0, 0, 0.3);
`;

export const Text = styled.h1`
  font-weight: normal;
  span {
    color: #7d7d7d;
    font-style: italic;
    font-size: 1.8rem;

    margin-bottom: 2rem;
  }
`;

export const Wrapper = styled.div`
  /* width: 40%; */
`;
export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
`;
export const Button = styled.button<PropsButton>`
  padding: 0.5rem 0.9rem;
  font-size: 1.2rem;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background: #e9e9e9;
  border: 0.5px solid #cccccc;

  border-radius: 0.3rem;

  cursor: pointer;

  ${(props) =>
    props.styleButton === 'text' &&
    css`
      color: #c7c7c7;
    `}
`;

export const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .map-popup {
    /* height: 0rem; */
    padding: 1rem;
    background: #fff;
    margin-bottom: 3rem;
    border-radius: 1rem;
    width: 13rem;
    margin-right: 0.8rem;
  }
  .map-popup .leaflet-popup-content-wrapper {
    /* height: 0rem; */
    background: #ff5555;
    box-shadow: none;
    border-radius: 1rem;
  }
  .leaflet-popup-tip-container {
    margin-top: 0.9rem;
  }
  div.leaflet-popup-content {
    width: 5px;
    margin: 0;
  }
`;

export const PopUpButton = styled.button`
  width: 53%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  background: none;
  color: #fff;

  border: 0;
  padding: 1rem;

  cursor: pointer;
`;

export const Favorites = styled.div`
  display: grid;

  /* display: flex; */
  flex-direction: row;
  grid-template-columns: repeat(4, 1fr);

  div {
    border: 0.2rem solid #ffb86c;
    border-radius: 1rem;
    margin: 0.5rem 1rem;

    p {
      text-align: center;
      margin: 0.5rem 2rem;
    }
  }
`;
