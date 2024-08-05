import axios from "axios"

export const getFilms = async (id: number) => {
  try {
    const url = import.meta.env.VITE_QUERY_URL

    const { data: films } = await axios.get(`${url}/films/?characters=${id}`)
    return films
  } catch (error) {
    throw new Error()

  }
}