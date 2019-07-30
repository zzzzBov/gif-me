import React from 'react'

import { IResultProps, Result } from './Result'

export interface IResultsProps {
  results: IResultProps[]
}

export const Results: React.FunctionComponent<IResultsProps> = ({
  results
}) => (
  <main className='Results'>
    {results.map((result) => (
      <Result key={result.id} {...result} />
    ))}
  </main>
)
