import { useRef, useState } from 'react';
import { useOrder } from 'helpers/useContext';
import {
  getFromStorage,
  updateStorage,
  STORAGE_KEYS,
} from 'helpers/localStorage';
import { addOrderApi } from 'services/api';
import { Button, Input, Label, StyledForm } from './Form.styled';

export const Form = ({ setIsModalOpen, setOrderNumber }) => {
  const [form, setForm] = useState(getFromStorage(STORAGE_KEYS.FORM) ?? {});

  const { foodToOrder, setFoodToOrder } = useOrder();

  const formRef = useRef();

  const handleChange = event => {
    const { value, name } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
    updateStorage(STORAGE_KEYS.FORM, { [name]: value });
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
          value={form.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Phone:
        <Input
          type="tel"
          placeholder="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Address:
        <Input
          type="text"
          placeholder="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit" disabled={isDisabled()}>
        Submit
      </Button>
    </StyledForm>
  );
};
