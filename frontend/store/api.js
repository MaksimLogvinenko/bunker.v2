import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bunker-cafe-backend.vercel.app/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Menu", "Categories"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        const formBody = new URLSearchParams(credentials).toString();
        return {
          url: "v1/auth/login",
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };
      },
    }),
    getMenu: builder.query({
      query: () => `v1/menu-items/`,
      providesTags: ["Menu"],
    }),
    getMenuById: builder.query({
      query: (id) => `v1/menu-items/${id}`,
      providesTags: (result, error, id) => [{ type: "Menu", id }],
    }),
    createMenuItem: builder.mutation({
      query: (newMenuItem) => ({
        url: "v1/menu-items/",
        method: "POST",
        body: newMenuItem,
      }),
      invalidatesTags: ["Menu"],
    }),
    getCategories: builder.query({
      query: () => "v1/categories/",
      providesTags: ["Categories"],
    }),
    createCategorieItem: builder.mutation({
      query: (newCategorieItem) => ({
        url: "v1/categories/",
        method: "POST",
        body: newCategorieItem,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategorieItem: builder.mutation({
      query: (id) => ({
        url: `v1/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMenuQuery,
  useLazyGetMenuByIdQuery,
  useCreateMenuItemMutation,
  useGetCategoriesQuery,
  useCreateCategorieItemMutation,
  useDeleteCategorieItemMutation,
} = api;
