"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { logout } from "@/store/authSlice";

export default function AdminPage() {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/admin/login");
  };

  if (!token) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">Добро пожаловать в админ-панель!</h1>
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={handleLogout}
        >
          Выйти
        </button>
      </div>
      {/* здесь остальная админка */}
    </div>
  );
}
