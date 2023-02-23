import axios from "axios"
 

const address =`https://tenor.googleapis.com/v2/`

const apikey = import.meta.env.VITE_GCLOUDAPI
const clientkey = import.meta.env.VITE_CLIENTKEY


export const getGifs = async ({queryKey, pageParam=''}) => {
  const [_key, keyword ] = queryKey
  const response = await axios.get(`${address}search?q=${keyword}&key=${apikey}&client_key=${clientkey}&limit=10&locale=it&pos=${pageParam}`)
  return response.data      
}
