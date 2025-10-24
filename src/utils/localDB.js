const getStoredCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

const addToDB = (id) => {
  const items = getStoredCart();
  items.push(id);
  localStorage.setItem("cart", JSON.stringify(items));
};

const removeFromDB = (id) => {
  const items = getStoredCart();
  localStorage.setItem("cart", JSON.stringify(items.filter((i) => i !== id)));
};

export { getStoredCart , addToDB, removeFromDB};
