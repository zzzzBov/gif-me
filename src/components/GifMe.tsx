import React from 'react'

import { useGiphy, useQueryString } from '../hooks'

import { Footer } from './Footer'
import { Results } from './Results'
import { Search } from './Search'

export const GifMe: React.FunctionComponent = () => {
  const [value, setValue] = useQueryString('q')

  const [results, search] = useGiphy(value)

  return (
    <div className="GifMe">
      <Search
        onChange={setValue}
        onSubmit={search}
        value={value}/>
      <Results
        results={results} />
      <Footer />
    </div>
  )
}
