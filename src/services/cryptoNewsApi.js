import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "e1b100800dmsh150778179f96080p10cb1ejsn25b4426f8d76",
  "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
};

const baseUrl = "https://real-time-news-data.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?query=${newsCategory}&limit=${count}&time_published=anytime&country=US&lang=en`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
