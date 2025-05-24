"use client";

import { useState } from "react";
import { useLoginMutation } from "@/store/api";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await login({ username, password }).unwrap();
      dispatch(setToken(response.access_token));
      router.push("/admin");
    } catch (error) {
      alert("Ошибка авторизации");
    }
  };

  return (
    <>
      <main className="flex flex-col justify-center min-h-[400px] h-full bg-no-repeat bg-cover bg-center pt-[120px] pb-10 bg-blend-multiply bg-dark/90">
        <div className="container">
          <div className="relative flex justify-center items-center md:flex-col md:items-start">
            <div className="flex flex-col text-center">
              <h3 className="subtitle-section">Login</h3>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-10">
          <h1 className="text-xl mb-4">Login</h1>
          <input
            className="w-full border p-2 mb-2"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-full border p-2 mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </main>
    </>
  );
}
