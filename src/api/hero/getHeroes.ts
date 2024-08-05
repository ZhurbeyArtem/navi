import axios from "axios"

export const getHeroes = async (page: number = 1) => {
  try {
    const url = import.meta.env.VITE_QUERY_URL
    const { data: heroes } = await axios.get(`${url}/people/?page=${page}`)
    return heroes
  } catch (error) {
    throw new Error()

  }
}