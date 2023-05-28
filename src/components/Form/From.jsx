import { useRef, useState } from 'react';
import { useOrder } from 'helpers/useContext';

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
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="name"
          name="name"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          placeholder="address"
          name="address"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
