export const STORAGE_KEYS = {
  SHOPS: 'shops list',
  FOODS: 'foods list',
  FORM: 'order form',
};

export const addToStorage = (key, data) => {
  const stringifyedData = JSON.stringify(data);
  localStorage.setItem(key, stringifyedData);
};

export const getFromStorage = key => {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);
  return parsedData;
};

export const updateStorage = (key, data) => {
  const orderFormData = getFromStorage(key);
  if (orderFormData) {
    const newData = { ...orderFormData, ...data };
    addToStorage(key, newData);
  } else {
    addToStorage(key, { ...data });
  }
};
