import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_USER} from "../../utils";


export interface User {
    "id": string,
    "email": string,
    "name": string,
    "photo": string,
    "city": string,
    "description": string,
    "univ": string,
    "age": number,
    "posts": [],
    "friends": []
}

export const loginApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: API_USER}),
    tagTypes: ['User'],
    endpoints: (build) =>({
        getUser: build.query<User,void>({
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
        })
    })
})


export const {useGetUserQuery,useLoginUserMutation,useRegisterUserMutation} = loginApi