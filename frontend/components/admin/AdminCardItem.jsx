import React from "react";
import Image from "next/image";
//api
import { useLazyGetMenuByIdQuery } from "@/store/api";
//img
import { MdDelete } from "react-icons/md";
import NoPhoto from "../../assets/img/menu/nophoto.jpg";

const AdminCardItem = ({
  setIsMode,
  item,
  setShowPopup,
  setCreateEditForm,
  handleDeleteMenuItem,
}) => {
  const [getMenuById, { data: menuItemsById, isLoading }] =
    useLazyGetMenuByIdQuery();

  const handleEditClick = async () => {
    setIsMode("edit");
    const result = await getMenuById(item.id);
    setCreateEditForm(result.data);
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col rounded-lg border border-gray">
      <Image
        src={item.image_url === null ? NoPhoto : item.image_url}
        alt={`Кафе Bunker - ${item.name} | місто Фастів`}
        // placeholder="blur"
        className="w-full h-[150px] object-cover object-center"
        width={300}
        height={300}
      />
      <div className="p-3">
        <h2 className="text-sm mb-2">{item.name}</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleEditClick}
            className="flex items-center justify-center text-sm p-2 rounded-lg bg-darkLight w-full"
          >
            Редагувати
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Видалити позицію ?")) {
                handleDeleteMenuItem(item.id);
              }
            }}
            className="flex items-center justify-center text-sm p-2 rounded-lg bg-red"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCardItem;
