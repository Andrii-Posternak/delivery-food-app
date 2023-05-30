import styled from 'styled-components';

export const FoodsContainer = styled.div`
  flex: 1;

  max-height: calc(100vh - 2 * 20px - 35px - 30px);
  border: 1px solid #212121;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 3px #212121;
  overflow-x: hidden;
  overflow-y: scroll;

  padding: 20px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
    margin: 8px;
  }

  &::-webkit-scrollbar {
    max-width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffa500;
    border-radius: 5px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CardItem = styled.li`
  width: calc(100%);

  @media screen and (min-width: 680px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 980px) {
    width: calc((100% - 40px) / 3);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 60px) / 4);
  }
`;
