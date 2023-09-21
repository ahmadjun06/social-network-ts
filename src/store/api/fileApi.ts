import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface UploadFilePayload {
  post_id: number;
  photo_file: string;
}

interface UploadFileResponse {
  status: number;
  file_id: number;
}

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseQuery,
    jsonContentType: "multipart/from-data",
  }),
  endpoints: (builder) => ({
    uploadFile: builder.mutation<UploadFileResponse, UploadFilePayload>({
      query: (payload) => {
        return {
          url: "add-photo",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {useUploadFileMutation} = fileApi