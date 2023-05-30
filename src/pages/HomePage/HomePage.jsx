import foodImg from '../../assets/images/foods.jpg';
import { Title } from './HomePage.styled';

export const HomePage = () => {
  return (
    <>
      <Title img={foodImg}>Welcome to our food delivery app</Title>
    </>
  );
};
