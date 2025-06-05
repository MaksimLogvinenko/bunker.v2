import React from "react";
//api
import { useLazyGetCategorieByIdQuery } from "@/store/api";
//img
import { MdClose, MdEdit } from "react-icons/md";

const AdminCategoriesList = ({
  setIsMode,
  cetegoriesItems,
  loadingCategories,
  handleDeleteCategorieItem,
  setCreateCategorieForm,
  setShowCategoriePopup,
}) => {
  const [getCategorieById, { isLoading }] = useLazyGetCategorieByIdQuery();

  const handleEditCategorie = async (id) => {
    const result = await getCategorieById(id);
    setCreateCategorieForm(result.data);
    setShowCategoriePopup(true);
  };

  return (
    <div className="flex items-center flex-wrap gap-3 mt-5">
      {!loadingCategories &&
        cetegoriesItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-gray rounded-lg p-2"
          >
            <span>{item.name}</span>
            <button
              type="button"
              className="bg-darkLight p-1 rounded-lg"
              onClick={() => {
                setIsMode("edit");
                handleEditCategorie(item.id);
              }}
            >
              <MdEdit />
            </button>
            <button
              type="button"
              className="bg-red p-1 rounded-lg"
              onClick={() => {
                if (window.confirm("Видалити категорію разом з стравами ?")) {
                  handleDeleteCategorieItem(item.id);
                }
              }}
            >
              <MdClose />
            </button>
          </div>
        ))}
    </div>
  );
};

export default AdminCategoriesList;
