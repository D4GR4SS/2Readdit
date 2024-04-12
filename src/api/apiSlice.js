// apiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.reddit.com/',
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (endpoint) => `/r/${endpoint}.json`,
      transformResponse: (response) => response.data.children,
    }),
    getTopSubreddits: builder.query({
      query: () => `subreddits.json?limit=10`,
      transformResponse: (response) =>
        response.data.children.map((subreddit) => subreddit.data.display_name),
    }),
    getPostData: builder.query({
      query: (URI) => `/r/${URI}.json`,
      transformResponse: (response) => [
        ...response[0].data.children,
        ...response[1].data.children,
      ],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetPostDataQuery,
  useGetTopSubredditsQuery,
} = apiSlice;
