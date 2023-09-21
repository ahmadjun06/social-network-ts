import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface AddPostPayload {
  user_id: number;
  main_text: string;
}

interface AddPostResponse {
  post_id: number;
  status: number;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getPostList: builder.query({
      query: () => "/post",
    }),
    getPostItem: builder.query({
      query: (postId: number) => `/post/${postId}`,
    }),
    addNewPost: builder.mutation< AddPostResponse,AddPostPayload>({
      query: (payload) => {
        return {
          url: "/post",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useLazyGetPostListQuery,
  useGetPostItemQuery,
  useAddNewPostMutation,
} = postApi;
