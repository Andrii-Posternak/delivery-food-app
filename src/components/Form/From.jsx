import { useRef, useState } from 'react';
import { useOrder } from 'helpers/useContext';
import { Button, Input, Label, StyledForm, WrapButton } from './Form.styled';

export const Form = () => {
  const [form, setForm] = useState({});

  const { foodToOrder, setFoodToOrder } = useOrder();

  const formRef = useRef();

  const handleChange = event => {
    const { value, name } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { user: form, order: foodToOrder };
    console.log(formData);
    formRef.current.reset();
    setFoodToOrder([]);
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
      <WrapButton>
        <Button type="submit">Submit</Button>
      </WrapButton>
    </StyledForm>
  );
};
