export const getAllCategories = () => {
  return (state) => state.categories;
};

export const getCategoryById = ({ categories }, categoryId) => {
  const category = categories.find((category) => category.id === categoryId);
  return category.title;
};

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;
