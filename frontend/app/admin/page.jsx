"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
//api
import {
  useCreateCategorieItemMutation,
  useCreateMenuItemMutation,
  useDeleteCategorieItemMutation,
  useGetCategoriesQuery,
  useGetMenuQuery,
} from "@/store/api";
//slices
import { logout } from "@/store/authSlice";
//components
import AdminPopup from "@/components/admin/AdminPopup";
import AdminCardList from "@/components/admin/AdminCardList";
import AdminCategoriesList from "@/components/admin/AdminCategoriesList";
//img
import { FaPlus } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { BiSolidCategory } from "react-icons/bi";
import AdminCategoriesPopup from "@/components/admin/AdminCategoriesPopup";

export default function AdminPage() {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");
  const [debouncedSearch, setDebouncedSearch] = React.useState("");
  const [showCategoriePopup, setShowCategoriePopup] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const [createCategorieForm, setCreateCategorieForm] = React.useState({
    name: "",
    description: "",
    image_url: "",
  });
  const [createEditForm, setCreateEditForm] = React.useState({
    name: "",
    category_id: 0,
    description: "",
    price: 0,
    image_url: "https://example.com/",
    is_available: true,
    is_new: false,
    ingredients: "",
    portion_size: "",
  });
  const { data: menuItems, isLoading, isError, error } = useGetMenuQuery();
  const { data: cetegoriesItems, isLoading: loadingCategories } =
    useGetCategoriesQuery();
  const [createMenuItem] = useCreateMenuItemMutation();
  const [createCategorieItem] = useCreateCategorieItemMutation();
  const [deleteCategorieItem] = useDeleteCategorieItemMutation();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  React.useEffect(() => {
    if (!token) {
      router.push("/admin/login");
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/admin/login");
  };

  const filteredItems = React.useMemo(() => {
    if (!menuItems) return [];

    const lowerSearch = debouncedSearch.toLowerCase().trim();
    return menuItems.filter((item) =>
      item.name.toLowerCase().includes(lowerSearch)
    );
  }, [menuItems, debouncedSearch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCreateEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeCategorie = (e) => {
    const { name, value } = e.target;

    setCreateCategorieForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateMenuItem = async () => {
    try {
      await createMenuItem(createEditForm).unwrap();
      toast.success("Позиція успішно додана!");
      setShowPopup(false);
    } catch (err) {
      toast.error("Помилка при додаванні");
      console.error("Помилка створення позиції:", err);
    }
  };

  const handleCreateCategorieItem = async () => {
    try {
      if (createCategorieItem.name !== "") {
        await createCategorieItem(createCategorieForm).unwrap();
        toast.success("Категорія успішно додана!");
        setShowCategoriePopup(false);
      }
    } catch (err) {
      toast.error("Помилка при додаванні");
      console.error("Помилка створення категорії:", err);
    }
  };

  const handleDeleteCategorieItem = async (id) => {
    try {
      await deleteCategorieItem(id).unwrap();
      toast.success("Категорію видалено!");
    } catch (err) {
      toast.error("Помилка при видалені");
      console.error("Помилка при видалені:", err);
    }
  };

  return (
    <>
      <main className="flex flex-col justify-center h-full bg-no-repeat bg-cover bg-center pt-[160px] pb-10 bg-blend-multiply bg-dark/90">
        <AdminPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          createEditForm={createEditForm}
          handleChange={handleChange}
          cetegoriesItems={cetegoriesItems}
          loadingCategories={loadingCategories}
          setCreateEditForm={setCreateEditForm}
          handleCreateMenuItem={handleCreateMenuItem}
        />
        <AdminCategoriesPopup
          createCategorieForm={createCategorieForm}
          showCategoriePopup={showCategoriePopup}
          setShowCategoriePopup={setShowCategoriePopup}
          handleChangeCategorie={handleChangeCategorie}
          handleCreateCategorieItem={handleCreateCategorieItem}
        />
        <div className="container">
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="p-5 bg-gray rounded-xl duration-300 active:scale-95"
                  onClick={() => setShowPopup(true)}
                >
                  <FaPlus />
                </button>
                <button
                  type="button"
                  className="p-5 bg-gray rounded-xl duration-300 active:scale-95"
                  onClick={() => setShowCategoriePopup(true)}
                >
                  <BiSolidCategory />
                </button>
              </div>
              <button
                type="button"
                className="p-5 bg-red rounded-xl duration-300 active:scale-95"
                onClick={handleLogout}
              >
                <ImExit />
              </button>
            </div>
            <AdminCategoriesList
              cetegoriesItems={cetegoriesItems}
              loadingCategories={loadingCategories}
              handleDeleteCategorieItem={handleDeleteCategorieItem}
            />
            <AdminCardList
              menuItems={filteredItems}
              isLoading={isLoading}
              isError={isError}
              error={error}
              searchText={searchText}
              setSearchText={setSearchText}
              setShowPopup={setShowPopup}
              setCreateEditForm={setCreateEditForm}
            />
          </div>
        </div>
      </main>
    </>
  );
}
