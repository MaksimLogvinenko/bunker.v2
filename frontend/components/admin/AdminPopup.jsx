import React from "react";
//img
import { MdClose } from "react-icons/md";

const AdminPopup = ({
  showPopup,
  setShowPopup,
  createEditForm,
  handleChange,
  handleChangeFile,
  cetegoriesItems,
  loadingCategories,
  setCreateEditForm,
  handleCreateMenuItem,
}) => {
  return (
    <div
      className={`${
        showPopup ? "flex" : "hidden"
      } absolute flex items-center justify-center w-full min-h-screen h-full right-0 left-0 top-0 bottom-0 z-50 bg-dark/50 p-5`}
    >
      <div className="flex flex-col gap-4 bg-black p-5 rounded-lg max-w-[500px] w-full">
        <button
          type="button"
          className="ml-auto text-2xl"
          onClick={() => setShowPopup(false)}
        >
          <MdClose />
        </button>
        <div className="flex flex-col text-sm">
          <label htmlFor="name">Заголовок</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            value={createEditForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="description">Опис</label>
          <input
            type="text"
            id="description"
            name="description"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            value={
              createEditForm.description === null
                ? ""
                : createEditForm.description
            }
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="price">Ціна</label>
          <input
            type="number"
            id="price"
            name="price"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            value={createEditForm.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="ingredients">Інгредієнти (через кому)</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            value={createEditForm.ingredients}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="portion_size">Порція, грамування</label>
          <input
            type="text"
            id="portion_size"
            name="portion_size"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            value={
              createEditForm.portion_size === null
                ? ""
                : createEditForm.portion_size
            }
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="category_id">Категорія</label>
          <select
            name="category_id"
            id="category_id"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            value={createEditForm.category_id}
            onChange={handleChange}
          >
            <option
              value={0}
              disabled
              className="bg-transparent p-2 text-black"
            >
              -- Виберіть категорію --
            </option>
            {!loadingCategories &&
              cetegoriesItems.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  className="bg-transparent p-2 text-black"
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="image_url">Картинка</label>
          <input
            type="file"
            id="image_url"
            name="image_url"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            accept="image/*"
            onChange={handleChangeFile}
          />
        </div>
        <div className="flex items-center gap-5 text-sm">
          <label htmlFor="is_new">Новинка</label>
          <input
            type="checkbox"
            id="is_new"
            name="is_new"
            className="bg-transparent p-1 border border-gray outline-none rounded-lg"
            autoComplete="off"
            checked={createEditForm.is_new}
            value={createEditForm.is_new}
            onChange={(e) =>
              setCreateEditForm((prev) => ({
                ...prev,
                is_new: e.target.checked,
              }))
            }
          />
        </div>
        <button
          type="button"
          onClick={handleCreateMenuItem}
          className="btn btn-primary"
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default AdminPopup;
