import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://bunker-cafe-backend.vercel.app/api/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        const formBody = new URLSearchParams(credentials).toString();
        return {
          url: 'v1/auth/login',
          method: 'POST',
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
      },
    }),
    // пример защищенного запроса
    getProfile: builder.query({
      query: () => 'profile',
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery } = api;
