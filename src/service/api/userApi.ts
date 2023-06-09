import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_USER } from "../../utils";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_USER,
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        `Bearer ${window.localStorage.getItem("token")}`
      );
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: [{ type: "User", id: "Object" }],
    }),
    getPosts: build.query({
      query: () => ({
        url: "/post/all",
      }),
      providesTags: [{ type: "User", id: "Object" }],
    }),
    loginUser: build.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    editUserProfile: build.mutation({
      query: (body) => ({
        url: "/user/edit",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    addUserPost: build.mutation({
      query: (body) => ({
        url: "/post/add",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    likePost: build.mutation({
      query: (body) => ({
        url: `/post/like/${body.id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `/post/delete/${id}`,
        method: "DELETE",
        id,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    editPost: build.mutation({
      query: (body) => ({
        url: `/post/edit/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    searchUsers: build.mutation({
      query: (body) => ({
        url: "/user/search/",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    addFriendUser: build.mutation({
      query: (body) => ({
        url: `/user/add/${body.param}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
    deleteFriendUser: build.mutation({
      query: (body) => ({
        url: `/user/delete/${body.param}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "Object" }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetPostsQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useEditUserProfileMutation,
  useAddUserPostMutation,
  useLikePostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useSearchUsersMutation,
  useAddFriendUserMutation,
  useDeleteFriendUserMutation,
} = userApi;
