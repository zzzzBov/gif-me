import React from 'react'

import { useQueryString } from '../useQueryString'

import { Footer } from './Footer'
import { Results } from './Results'
import { Search } from './Search'

export const GifMe: React.FunctionComponent = () => {
  const [value, setValue] = useQueryString('q')

  return (
    <div className="GifMe">
      <Search
        onChange={setValue}
        onSubmit={() => {}}
        value={value}/>
      <Results/>
      <Footer />
    </div>
  )
}
