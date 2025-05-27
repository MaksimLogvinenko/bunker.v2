import React from "react";
//components
import AdminCardItem from "./AdminCardItem";

const AdminCardList = ({
  menuItems,
  isLoading,
  isError,
  error,
  searchText,
  setSearchText,
  setShowPopup,
  setCreateEditForm,
}) => {
  return (
    <>
      <input
        type="search"
        name="search"
        placeholder="Пошук"
        className="bg-transparent p-3 rounded-lg my-5 outline-none border border-gray"
        autoComplete="off"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {isLoading && <p className="text-center mb-5">Загрузка...</p>}
      {isError && (
        <p className="text-red-500 text-center mb-5">Ошибка: {error?.status}</p>
      )}

      {menuItems.length > 0 ? (
        <div className="grid grid-cols-6 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          {menuItems.map((item) => (
            <AdminCardItem
              key={item.id}
              item={item}
              setShowPopup={setShowPopup}
              setCreateEditForm={setCreateEditForm}
            />
          ))}
        </div>
      ) : (
        !isLoading && <p>Нічого не знайдено</p>
      )}
    </>
  );
};

export default AdminCardList;
