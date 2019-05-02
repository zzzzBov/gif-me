import querystring from 'querystring'

import { useCallback, useState } from 'react'

import { IImage } from '../interfaces'
import { API_KEY } from '../key'

let initialized = false

export const useGiphy = (q: string): [IImage[], () => void] => {
  const [data, setData] = useState([])

  const searchGiphy = useCallback(
    async () => {
      const qs = {
        api_key: API_KEY,
        limit: 30,
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

        const newData = results.data.map((image: any) => ({
          alt: image.title,
          height: image.images.fixed_height.height,
          src: image.images.fixed_height.url,
          width: image.images.fixed_height.width
        }))

        setData(newData)
      } catch (e) {
        setData([])
      }
    },
    [q]
  )

  if (!initialized) {
    searchGiphy()
    initialized = true
  }

  return [
    data,
    searchGiphy
  ]
}
