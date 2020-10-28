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
  top: 18%;
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
