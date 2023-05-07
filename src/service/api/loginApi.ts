import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_USER} from "../../utils";
import {User} from "../../types/types";

export const loginApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_USER,
        prepareHeaders: (headers) => {
            headers.set('authorization', `Bearer ${window.localStorage.getItem('token')}`)
            return headers
        }

    }),
    tagTypes: ['User'],
    endpoints: (build) =>({
        getUser: build.query({
            query: (id) => `${id}`
        }),
        loginUser: build.mutation({
            query: (body) => ({
                url: 'login',
                 method: "POST",
                    body
            })
        }),
        registerUser: build.mutation({
            query: (body) => ({
                url: '/register',
                method: "POST",
                body
            })
        }),
        editUserProfile: build.mutation({
            query: (body) => ({
                url: '/edit',
                method: "PUT",
                body
            }),
        })
    })
})


export const {useGetUserQuery,useLoginUserMutation,useRegisterUserMutation, useEditUserProfileMutation} = loginApi