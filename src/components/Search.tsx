import React from 'react'

import { SearchField } from './SearchField'

export interface ISearchProps {
  onChange(value: string): void,
  onSubmit(): void,
  value: string
}

export const Search: React.FunctionComponent<ISearchProps> = ({
  onChange,
  onSubmit,
  value
}) => (
  <header className='Search'>
    <form
      className='Search_form'
      method='GET'
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}>
      <SearchField
        label='Gif Me'
        name='q'
        onChange={onChange}
        value={value} />
      <button
        className='Search_button'
        type='submit'>
        <i className='fa fa-search' aria-hidden='true'></i>
        <span className='sr-only'>Search</span>
      </button>
    </form>
  </header>
)
