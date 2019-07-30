import querystring from 'querystring'

import { useCallback, useState } from 'react'

import { IResultProps } from '../components'
import { IGIF, ISearchResponse } from '../interfaces'
import { API_KEY } from '../key'

let initialized = false

export const useGiphy = (q: string): [IResultProps[], () => void] => {
  const [data, setData] = useState<IResultProps[]>([])

  const searchGiphy = useCallback(
    async () => {
      const qs = {
        api_key: API_KEY,
        limit: 30,
        q
      }

      const search = querystring.stringify(qs)

      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?${search}`)

        if (!response.ok) {
          throw new Error('bad response')
        }

        const results = await response.json() as ISearchResponse

        const newData = results.data.map((gif: IGIF) => {
          const {
            id,
            images: {
              fixed_height: {
                height,
                url: src,
                width
              },
              original: {
                url: originalUrl
              }
            },
            title: alt
          } = gif

          return {
            alt,
            height,
            id,
            onClick () {
              navigator.clipboard.writeText(originalUrl)
            },
            src,
            width
          }
        })

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
