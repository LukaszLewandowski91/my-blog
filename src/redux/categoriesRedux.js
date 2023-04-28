export const getAllCategories = () => {
  return (state) => state.categories;
};

export const getCategoryById = ({ categories }, categoryId) =>
  categories.find((category) => category.id === categoryId);

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;
