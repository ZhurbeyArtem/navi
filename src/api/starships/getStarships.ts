import axios from "axios"

export const getStarships = async (pilotId: number) => {
  try {
    const url = import.meta.env.VITE_QUERY_URL
    const { data: starships } = await axios.get(`${url}/starships/?pilots=${pilotId}`)
    
    return starships
  } catch (error) {
    throw new Error()

  }
}