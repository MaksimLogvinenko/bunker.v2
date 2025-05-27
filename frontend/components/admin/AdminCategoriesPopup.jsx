import React from "react";
//img
import { MdClose } from "react-icons/md";

const AdminCategoriesPopup = ({
  createCategorieForm,
  showCategoriePopup,
  setShowCategoriePopup,
  handleChangeCategorie,
  handleCreateCategorieItem,
}) => {
  return (
    <div
      className={`${
        showCategoriePopup ? "flex" : "hidden"
      } absolute flex items-center justify-center w-full min-h-screen h-full right-0 left-0 top-0 bottom-0 z-50 bg-dark/50 p-5`}
    >
      <div className="flex flex-col gap-4 bg-black p-5 rounded-lg max-w-[500px] w-full">
        <button
          type="button"
          className="ml-auto text-2xl"
          onClick={() => setShowCategoriePopup(false)}
        >
          <MdClose />
        </button>
        <div className="flex flex-col text-sm">
          <label htmlFor="name">Нова категорія</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            value={createCategorieForm.name}
            onChange={handleChangeCategorie}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreateCategorieItem}
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default AdminCategoriesPopup;
