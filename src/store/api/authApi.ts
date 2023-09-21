import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface GetUserData {
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: string;
    city: string;
  };
}

interface LoginUserPayload {
  email: string;
  password: string;
}

interface LoginUserData {
  status: number;
  user_id: number;
}

interface RegistrationUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface RegistrationUserData extends LoginUserData {}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    addUser: builder.mutation<RegistrationUserData, RegistrationUserPayload>({
      query: (payload) => {
        return {
          url: "/registration",
          method: "POST",
          body: payload,
        };
      },
    }),
    loginUser: builder.mutation<LoginUserData, LoginUserPayload>({
      query: (payload) => {
        return {
          url: "/login",
          method: "POST",
          body: payload,
        };
      },
    }),
    getUser: builder.query({
      query: (userId: string) => `/user/${userId}`,
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation, useGetUserQuery } =
  authApi;
