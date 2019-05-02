import React from 'react'

import { Footer } from './Footer'
import { Results } from './Results'
import { Search } from './Search'

export const GifMe: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('')

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
