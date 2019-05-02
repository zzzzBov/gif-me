import React from 'react'

import { Footer } from './Footer'
import { Results } from './Results'
import { Search } from './Search'

export const GifMe: React.FunctionComponent = () => {
  return (
    <div className="GifMe">
      <Search />
      <Results />
      <Footer />
    </div>
  )
}
