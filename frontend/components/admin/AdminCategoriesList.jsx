import React from "react";

const AdminCategoriesList = ({
  cetegoriesItems,
  loadingCategories,
  handleDeleteCategorieItem,
}) => {
  return (
    <div className="flex items-center flex-wrap gap-3 mt-5">
      {!loadingCategories &&
        cetegoriesItems.map((item) => (
          <div key={item.id} className="flex items-center bg-gray rounded-lg">
            <span className="py-1 px-3">{item.name}</span>
            <button
              type="button"
              className="bg-red px-2 py-1 rounded-r-lg"
              onClick={() => handleDeleteCategorieItem(item.id)}
            >
              Видалили
            </button>
          </div>
        ))}
    </div>
  );
};

export default AdminCategoriesList;
