import querystring from 'querystring'

import { useCallback, useState } from 'react'

import { API_KEY } from '../key'

export const useGiphy = (q: string): [string[], () => void] => {
  const [data, setData] = useState([])

  const searchGiphy = useCallback(
    async () => {
      const qs = {
        api_key: API_KEY,
        q
      }

      const search = querystring.stringify(qs)

      try {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?${search}`)

        if (!response.ok) {
          throw new Error('bad response')
        }

        const results = await response.json()

        console.log(results)
      }
      catch (e) {
        setData([])
      }
    },
    [q]
  )

  return [
    data,
    searchGiphy
  ]
}
