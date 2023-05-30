import { useRef, useState } from 'react';
import { useOrder } from 'helpers/useContext';
import { addOrderApi } from 'services/api';
import { Button, Input, Label, StyledForm } from './Form.styled';

export const Form = ({ setIsModalOpen, setOrderNumber }) => {
  const [form, setForm] = useState({});

  const { foodToOrder, setFoodToOrder } = useOrder();

  const formRef = useRef();

  const handleChange = event => {
    const { value, name } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const totalPrice = calcTotalPrice();
    const date = new Date();
    const formData = {
      user: form,
      order: { totalPrice, date, food: foodToOrder },
    };

    formRef.current.reset();
    getOrderNumber(formData);
    setFoodToOrder([]);
    setIsModalOpen(true);
  };

  const getOrderNumber = async data => {
    try {
      const order = await addOrderApi(data);
      setOrderNumber(order._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const calcTotalPrice = () => {
    const total = foodToOrder.reduce((acc, { price, amount }) => {
      acc += price * amount;
      return +acc.toFixed(2);
    }, 0);
    return total;
  };

  const isDisabled = () => {
    if (!foodToOrder.length) return true;
    return false;
  };

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          placeholder="name"
          name="name"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Phone:
        <Input
          type="tel"
          placeholder="phone"
          name="phone"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Address:
        <Input
          type="text"
          placeholder="address"
          name="address"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit" disabled={isDisabled()}>
        Submit
      </Button>
    </StyledForm>
  );
};
