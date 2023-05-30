import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 2 * 20px - 35px - 30px);
  box-shadow: 0px 0px 10px 3px #212121;
  font-size: 48px;
  text-align: center;
  color: white;
  text-shadow: 2px 0 2px #212121, 0 2px 2px #212121, -2px 0 2px #212121,
    0 -2px 2px #212121;

  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
`;
