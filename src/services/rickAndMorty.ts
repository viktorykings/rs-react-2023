import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FormData } from '../components/types'

interface QueryRes {
  results: FormData[]
}
export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharackterByName: builder.query<QueryRes, string>({
      query: (name: string) => ({
        url: 'character/',
        params: {
          name: name
        }
      })
    }),
  }),
})

export const { useGetCharackterByNameQuery } = rickAndMortyApi