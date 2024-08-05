import axios from "axios"

export const getHero = async (id: number) => {
  try {
    const url = import.meta.env.VITE_QUERY_URL
    const { data: heroes } = await axios.get(`${url}/people/${id}`)
    return heroes
  } catch (error) {
    throw new Error()
  }
}